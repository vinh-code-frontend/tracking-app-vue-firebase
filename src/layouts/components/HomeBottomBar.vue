<script lang="tsx">
import { HomeFilled, PieChart, User, Histogram, CirclePlusFilled } from '@element-plus/icons-vue';
import { getElColor } from '@/shared/utils/color';
import { RouterLink, useRoute } from 'vue-router';
import { homeRoutes } from '@/router/routes';
import { computed, defineComponent, h } from 'vue';
import { ElIcon } from 'element-plus';
import { type JSX, Fragment } from 'vue/jsx-runtime';

type IMenu = {
  label: string;
  component: () => JSX.Element;
  path?: string;
};

const middleIndex = Math.floor(homeRoutes.length / 2);

const iconMap = {
  Home: HomeFilled,
  Chart: PieChart,
  Dashboard: Histogram,
  User: User
};

const addButton = (onClick: () => void): JSX.Element => {
  return (
    <div class="relative">
      <div class="!absolute -bottom-[24px] left-[50%] -translate-x-[50%] bg-transparent" onClick={onClick}>
        <ElIcon class="cursor-pointer" size="72px" color={getElColor('primary')}>
          <CirclePlusFilled />
        </ElIcon>
      </div>
    </div>
  );
};

export default defineComponent({
  emits: ['open-drawer'],
  setup(_, { emit }) {
    const route = useRoute();

    const menu = computed(() =>
      homeRoutes.reduce((acc, item, index) => {
        if (index === middleIndex) {
          acc.push({ label: 'Add', component: () => addButton(() => emit('open-drawer')) });
        }

        const temp = {
          label: item.meta?.title || '',
          component: () => {
            const iconComponent = iconMap[item.name as keyof typeof iconMap] ?? User;
            const iconColor = route.name === item.name ? getElColor('primary') : getElColor('info');

            return (
              <div class="h-14 flex items-center justify-center">
                <ElIcon class="cursor-pointer" size="24px" color={iconColor}>
                  {h(iconComponent)}
                </ElIcon>
              </div>
            );
          },
          path: `/${item.path}`
        };
        acc.push(temp);
        return acc;
      }, [] as IMenu[])
    );

    return () => (
      <div class="absolute inset-0 top-[unset]">
        <div class="grid grid-cols-[18%_18%_1fr_18%_18%] relative items-center text-center bg-white">
          {menu.value.map((item) =>
            item.path ? (
              <RouterLink key={item.label} to={item.path}>
                {item.component()}
              </RouterLink>
            ) : (
              <Fragment key={item.label}>{item.component()}</Fragment>
            )
          )}
        </div>
      </div>
    );
  }
});
</script>
