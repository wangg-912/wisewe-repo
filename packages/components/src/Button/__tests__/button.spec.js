import { mount } from "@vue/test-utils";
import Button from "./../button.vue";
describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'info' },
    })
    expect(wrapper.classes()).toContain('el-button--primary')
  })
}
