/*
 * @Author: Miya
 * @Date: 2021-03-18 11:26:09
 * @LastEditTime: 2021-03-18 18:06:24
 * @LastEditors: Miya
 * @Description: 文件管理页面
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\pages\Manager.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';
import Card from '../components/mermaid-ui/card/card';
import '../style/manager.less';

const data = reactive({
  file: [
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6053008c864ea.jpg',
      name:
        'Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2Mock2.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300b847e79.jpg',
      name: 'Mock3.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300bc38ef7.jpg',
      name: 'Mock4.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300c0a9da1.jpg',
      name: 'Mock5.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6053008c864ea.jpg',
      name: 'Mock2.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300b847e79.jpg',
      name: 'Mock3.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300bc38ef7.jpg',
      name: 'Mock4.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300c0a9da1.jpg',
      name: 'Mock5.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6053008c864ea.jpg',
      name: 'Mock2.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300b847e79.jpg',
      name: 'Mock3.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300bc38ef7.jpg',
      name: 'Mock4.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300c0a9da1.jpg',
      name: 'Mock5.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6053008c864ea.jpg',
      name: 'Mock2.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300b847e79.jpg',
      name: 'Mock3.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300bc38ef7.jpg',
      name: 'Mock4.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300c0a9da1.jpg',
      name: 'Mock5.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6053008c864ea.jpg',
      name: 'Mock2.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300b847e79.jpg',
      name: 'Mock3.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300bc38ef7.jpg',
      name: 'Mock4.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/605300c0a9da1.jpg',
      name: 'Mock5.jpg',
    },
    {
      url: 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg',
      name: 'Mock1.jpg',
    },
  ],
  fileView: [{}],
});

// 测试用图片
const mock = 'https://www.hualigs.cn/image/6052dfb1e0b49.jpg';

const Manager = defineComponent({
  name: 'Manager',
  components: {
    'm-card': Card,
  },
  setup() {
    data;
    return { data };
  },
  mounted() {
    const mock = data.file.slice(0, 8);
    return (data.fileView = mock);
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
      </div>
    );
  },
});

export default Manager;
