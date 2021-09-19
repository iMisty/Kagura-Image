/*
 * @Author: Miya
 * @Date: 2021-03-18 11:26:09
 * @LastEditTime: 2021-09-19 18:07:34
 * @LastEditors: Miya
 * @Description: 文件管理页面
 * @FilePath: \front\src\pages\Manager.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';
import Model from '../components/ManagerModel';
import Card from '../components/mermaid-ui/card/card';
import Button from '../components/mermaid-ui/button/button';
import { File } from '../interface/file';
import '../style/manager.less';
import { DELETE, GET } from '../utils/request';

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
  // 根据页码及当前数据容量计算循环次数
  let max = 8 * page;
  // 临时数组存放图片数据
  let temp: never[] = [];

  // 计算len值
  if (page === 1) {
    len = 0;
  } else {
    len = 8 * page - 8;
  }

  // 计算max值
  if (data.file.length < 8) {
    max = data.file.length;
    console.log(max);
    console.log('<8');
  } else if (max > data.file.length) {
    max = data.file.length - 1;
  } else {
    {
      max = 8 * page;
    }
  }
  // 数组遍历
  for (let i = len; i < max; i++) {
    temp.push(data.file[i]);
  }
  console.log(temp);
  data.fileView = temp;
  data.nowPage = page;
  return false;
  // return (data.fileView = temp);
};
/**
 * @description: 获取图片详细信息
 * @param {*} id
 * @return {*}
 */
const getFileContent = (id: number) => {
  return (data.nowPreview = id);
};

const deleteImage = async (path: string) => {
  const getLength = data.file.findIndex((item: any) => item.path === path);
  const result = await DELETE(`/api/file/${path}`);
  if (!result) {
    return false;
  }
  data.file.splice(getLength, 1);
  data.fileView.splice(getLength, 1);
  getFileView(data.nowPage);
  data.nowPreview = 0;
};

const Manager = defineComponent({
  name: 'Manager',
  components: {
    'm-card': Card,
    'm-button': Button,
    'manager-model': Model,
  },
  setup() {
    data;
    return { data };
  },
  async mounted() {
    const getData = await GET('/api/file');
    data.file = getData.data.data.reverse();
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
                    <img class="img" src={item.url} alt={item.name} />
                    <p class="text">{item.name}</p>
                  </article>
                );
              })}
            </section>
            {/* TODO: Component */}
            <section class="manager--list__page">
              <m-button
                type="link"
                disabled={this.data.nowPage === 1}
                onClick={() => getFileView(this.data.nowPage - 1)}
              >
                上一页
              </m-button>
              <m-button
                type="link"
                disabled={
                  this.data.nowPage === Math.ceil(this.data.file.length / 9)
                }
                onClick={() => getFileView(this.data.nowPage + 1)}
              >
                下一页
              </m-button>
              <section class="page">当前第{this.data.nowPage}页</section>
            </section>
          </section>
        </m-card>
        <manager-model
          id={data.nowPreview}
          onDelete={(path: string) => {
            deleteImage(path);
          }}
        ></manager-model>
      </div>
    );
  },
});

export default Manager;
