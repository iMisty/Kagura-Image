/*
 * @Author: Miya
 * @Date: 2021-03-18 11:26:09
 * @LastEditTime: 2021-06-11 17:20:48
 * @LastEditors: Miya
 * @Description: 文件管理页面
 * @FilePath: \front\src\pages\Manager.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';
import Model from '../components/ManagerModel';
import Card from '../components/mermaid-ui/card/card';
import { File } from '../interface/file';
import '../style/manager.less';
import { GET } from '../utils/request';

const data = reactive({
  file: [],
  fileView: [],
  nowPage: 1,
  nowPreview: 0,
});

/**
 * @description: 获取页数对应图片数据
 * @param {number} page
 * @return {*}
 */
const getFileView = (page: number) => {
  const MAX_PAGE = Math.ceil(data.file.length / 9);
  if (page < 1 || page > MAX_PAGE) {
    return false;
  }

  // 根据页码计算开始下标
  let len;
  // 临时数组存放图片数据
  let temp: never[] = [];

  if ((page = 1)) {
    len = 0;
  } else {
    len = 8 * page - 8;
  }

  for (let i = len; i < 8 * page; i++) {
    temp.push(data.file[i]);
  }
  return (data.fileView = temp);
};
/**
 * @description: 获取图片详细信息
 * @param {*} id
 * @return {*}
 */
const getFileContent = (id: number) => {
  return (data.nowPreview = id);
};

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
    const getData = await GET('/api/file');
    data.file = getData.data.data;
    console.log(getData);
    const a = await getFileView(1);
    console.log(a);
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
              {data.fileView.map((item: File) => {
                return (
                  // TODO: Component
                  <article
                    class="manager--list__item"
                    onClick={() => getFileContent(item.id)}
                  >
                    <img class="img" src={item.path} alt={item.name} />
                    <p class="text">{item.name}</p>
                  </article>
                );
              })}
            </section>
            {/* TODO: Component */}
            <section class="manager--list__page">123456789</section>
          </section>
        </m-card>
        <manager-model id={data.nowPreview}></manager-model>
      </div>
    );
  },
});

export default Manager;
