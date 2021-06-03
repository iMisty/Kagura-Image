/*
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2021-06-03 11:54:19
 * @LastEditors: Miya
 * @Description: Button component in Mermaid UI
 * @FilePath: \front\src\components\mermaid-ui\button\button.tsx
 * @Version: 2.0
 */
// import { Component, Vue, Prop, Emit } from "vue-property-decorator";
// import './button.less';
// @Component({})
// export default class MermaidButton extends Vue {
//   // Button Color
//   // 按钮颜色
//   @Prop({ default: "primary" })
//   private color!: string;

//   // Button Type
//   @Prop({ default: "round" })
//   private type!: string;

//   // Button Size
//   @Prop({ default: "regular" })
//   private size!: string;

//   // Click Event
//   // 点击事件
//   @Emit("clickevent")
//   public handleClick() {
//     console.log("click button");
//   }

// private render() {
//   return (
//     <button
//       class={`mmui__button mmui__button--${this.color} mmui__button--type-${this.type}-${this.color}`}
//       onClick={this.handleClick}
//     >
//       {this.$slots.default}
//     </button>
//   );
// }
// }
import { defineComponent, reactive, renderSlot } from 'vue';
import './button.less';

const data = reactive({});

const handleClick = () => {
  console.log('click button');
};

const MermaidUIButton = defineComponent({
  name: 'MermaidUIButton',
  props: {
    color: {
      type: String,
      require: true,
      default: 'primary',
    },
    type: {
      type: String,
      require: true,
      default: 'round',
    },
    size: {
      type: String,
      require: true,
      default: 'regular',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['clickevent'],
  setup(props, ctx) {
    data;
    return { data };
  },
  render() {
    return (
      <button
        type="button"
        class={`mmui__button mmui__button--${this.color} mmui__button--type-${this.type}-${this.color}`}
        disabled={this.disabled}
        onClick={handleClick}
      >
        {renderSlot(this.$slots, 'default')}
      </button>
    );
  },
});

export default MermaidUIButton;
