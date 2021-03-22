/*
 * @Author: Miya
 * @Date: 2021-03-16 14:45:59
 * @LastEditTime: 2021-03-22 17:47:15
 * @LastEditors: Miya
 * @Description: test
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\pages\test.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';
import axios from 'axios';

const data = reactive({
  file: [
    { url: '1' },
    { url: '2' },
    { url: '3' },
    { url: '4' },
    { url: '5' },
    { url: '6' },
  ],
});

const handleClick = () => {
  const random = Math.random() * 100;
  console.log(random);
  const obj = { url: random.toString() };
  data.file.push(obj);
};

const update = async () => {
  console.log('start')
  const ids = document.getElementById('file');
  let forms = new FormData();
  
  
};

const test = defineComponent({
  setup() {
    data;
    return { data };
  },
  render() {
    return (
      <div style="display:flex;justify-content: center;align-items:center;">
        {/* <form action="http://localhost:12450/dir" method="post"> */}
        <input type="file" name="file" id="file" onChange={() => update()}/>
        <input
          type="submit"
          value="111111"
          onClick={() => {
            update();
          }}
        />
        {/* </form> */}
      </div>
    );
  },
});

export default test;
