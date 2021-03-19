// import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
// import './input.less';

// enum Type {
//   text,
//   email,
//   password
// }

// enum Size {
//   large,
//   normal,
//   small
// }

// enum Grid {
//   single,
//   multi
// }

// @Component({})
// export default class MermaidInput extends Vue {
//   private a = '';

//   @Prop({ default: '示例标题' })
//   private title?: string;

//   @Prop({ default: 'text' })
//   private type?: Type;

//   @Prop({ default: 'normal' })
//   private size?: Size;

//   @Prop({ default: 'single' })
//   private grid?: Grid;

//   @Prop({ default: 'placeholder' })
//   private placeholder?: string;

//   @Prop()
//   private value?: string;

//   @Prop({ default: 140 })
//   private maxlength?: number;

//   @Emit('ChangeEvent')
//   private changeEvent(e: { target: { value: string } }) {
//     console.log(e.target.value);
//     console.log('Change');
//     // this.value = e.target.value;
//   }

// private render() {
//   return (
//     <div class={`mmui__input ${this.grid}-grid`}>
//       <p class="mmui__input--title">{this.title}</p>
//       <label for={this.value}>
//         <input
//           class={`mmui__input--form form-${this.size}`}
//           type={this.type}
//           placeholder={this.placeholder}
//           value={this.a}
//           v-model={this.a}
//           maxlength={this.maxlength}
//           onInput={(e: { target: { value: string } }) => this.changeEvent(e)}
//         />
//       </label>
//     </div>
//   );
//   }
// }

import { defineComponent } from 'vue';
import './input.less';

enum Type {
  text,
  email,
  password,
}

enum Size {
  large,
  normal,
  small,
}

enum Grid {
  single,
  multi,
}

const MermaidUIInput = defineComponent({
  props: {
    // 输入框标题
    title: {
      type: String,
      default: '示例标题',
    },
    // 文本框类型
    type: {
      type: String,
      default: 'text',
    },
    // 文本框大小
    size: {
      type: String,
      default: 'normal',
    },
    // 是否并排
    grid: {
      type: String,
      default: 'single',
    },
    // 底部提示文字
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    // 文本框文本
    value: {
      type: String,
      value: '',
    },
    // 文字数目限制
    maxlength: {
      type: Number,
      default: 140,
    },
  },
  emits: ['input'],
  setup(props, ctx) {
    let values = props.value;
    // Emit: 修改操作
    const handleChange = ($event?: any) => {
      console.log($event);
      console.log(ctx);
      return ctx.emit('input', $event?.target?.value);
    };
    return { values, handleChange };
  },

  render() {
    return (
      <div class={`mmui__input ${this.grid}-grid`}>
        <p class="mmui__input--title">{this.title}</p>
        <label for={this.value}>
          <input
            class={`mmui__input--form form-${this.size}`}
            type={this.type}
            placeholder={this.placeholder}
            value={this.values}
            v-model={this.values}
            maxlength={this.maxlength}
            onInput={($event: Event) => this.handleChange($event)}
          />
        </label>
      </div>
    );
  },
});

export default MermaidUIInput;
