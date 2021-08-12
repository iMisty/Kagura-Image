/*
 * @Author: Miya
 * @Date: 2021-03-17 17:47:14
 * @LastEditTime: 2021-08-11 17:01:42
 * @LastEditors: Miya
 * @Description: Logo Components
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\components\logo.tsx
 * @Version: 1.0
 */
import { defineComponent } from 'vue';
import '../style/logo.less';

import LogoImg from '../assets/logo_w.png';

const Logo = defineComponent({
  render() {
    return (
      <div class="logo">
        <img class="logo--img" src={LogoImg} />
      </div>
    );
  },
});

export default Logo;
