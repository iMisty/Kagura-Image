/*
 * @Author: Miya
 * @Date: 2021-03-18 16:17:11
 * @LastEditTime: 2021-03-18 17:30:18
 * @LastEditors: Miya
 * @Description: 
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\components\managerItem.tsx
 * @Version: 
 */
import { defineComponent,reactive } from 'vue'

const data = reactive({})

const ManagerItem = defineComponent({
    setup(){
      data;
      return{ data }
    },

    render(){
        return(<div class="manager--list__item"></div>)
    }
});

export default ManagerItem;