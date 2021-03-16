/*
 * @Author: Miya
 * @Date: 2021-03-15 12:26:30
 * @LastEditTime: 2021-03-16 17:11:00
 * @LastEditors: Miya
 * @Description: index
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\pages\Home.tsx
 * @Version: 1.0
 */
import { defineComponent } from 'vue';
import upload from '../components/upload';

const home = defineComponent({
  components: {
    upload,
  },
  setup() {},
  render() {
    return (
      <div class="home">
        <upload></upload>
      </div>
    );
  },
});

export default home;
