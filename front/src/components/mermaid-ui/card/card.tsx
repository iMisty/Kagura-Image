/*
 * @Author: Miya
 * @Date: 2021-03-18 10:51:09
 * @LastEditTime: 2021-03-18 11:11:44
 * @LastEditors: Miya
 * @Description: Mermaid UI Card Component
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\components\mermaid-ui\card\card.tsx
 * @Version: 2.0
 */
import { defineComponent, renderSlot } from 'vue';
import './card.less';

const MermaidUICard = defineComponent({
  name: 'MermaidUICard',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    needTitle: {
      type: Boolean,
      default: true,
    },
  },
  setup() {},

  render() {
    return (
      <div class="mmui__card">
        {this.needTitle ? <p class="mmui__card--title">{this.title}</p> : ''}
        {renderSlot(this.$slots, 'default')}
      </div>
    );
  },
});

export default MermaidUICard;
