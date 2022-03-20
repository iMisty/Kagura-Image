/*
 * @Author: Miya
 * @Date: 2021-03-15 12:26:30
 * @LastEditTime: 2022-03-20 21:24:23
 * @LastEditors: Miya
 * @Description: index
 * @FilePath: \Kagura-Image\front\src\pages\Home.tsx
 * @Version: 1.0
 */
import { defineComponent } from 'vue';
import UploadFile from '../components/UploadFile';

const home = defineComponent({
  components: {
    UploadFile,
  },
  setup() {},
  render() {
    return (
      <div class="home">
        {/* <UploadFile></UploadFile> */}
      </div>
    );
  },
});

export default home;
