/*
 * @Author: Miya
 * @Date: 2021-03-16 14:45:59
 * @LastEditTime: 2021-03-16 14:56:23
 * @LastEditors: Miya
 * @Description: test
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\pages\test.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';

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

const test = defineComponent({
  setup() {
    data;
    return { data };
  },
  render() {
    return (
      <div>
        {this.data.file.map((item: any) => {
          return <p>{item.url}</p>;
        })}
        <button onClick={handleClick}>3233333</button>
      </div>
    );
  },
});

export default test;
