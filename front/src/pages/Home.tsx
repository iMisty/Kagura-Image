/*
 * @Author: Miya
 * @Date: 2021-03-15 12:26:30
 * @LastEditTime: 2021-03-18 16:22:50
 * @LastEditors: Miya
 * @Description: index
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\pages\Home.tsx
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
        <UploadFile></UploadFile>
      </div>
    );
  },
});

export default home;
