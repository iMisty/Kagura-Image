/*
 * @Author: Miya
 * @Date: 2021-03-18 11:26:09
 * @LastEditTime: 2021-06-06 04:57:22
 * @LastEditors: Miya
 * @Description: 文件管理页面
 * @FilePath: \front\src\pages\Manager.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';
import Model from '../components/ManagerModel';
import Card from '../components/mermaid-ui/card/card';
import '../style/manager.less';
import { GET } from '../utils/request';

const data = reactive({
  file: [],
  fileView: [{}],
});

const Manager = defineComponent({
  name: 'Manager',
  components: {
    'm-card': Card,
    'manager-model': Model,
  },
  setup() {
    data;
    return { data };
  },
  async mounted() {
    const getData = await GET('/api/image/readdir');
    console.log(getData);
  },

  render() {
    return (
      <div class="manager">
        <m-card needTitle={false}>
          <section class="manager--container">
            {/* TODO: component */}
            <section class="manager--address">
              http://wdnmd.12450.cn/public/
            </section>
            <section class="manager--list">
              {data.fileView.map((item: any) => {
                return (
                  // TODO: Component
                  <article class="manager--list__item">
                    <img class="img" src={item.url} alt={item.name} />
                    <p class="text">{item.name}</p>
                  </article>
                );
              })}
            </section>
            {/* TODO: Component */}
            <section class="manager--list__page">123456789</section>
          </section>
        </m-card>
        {/* <manager-model></manager-model> */}
      </div>
    );
  },
});

export default Manager;
