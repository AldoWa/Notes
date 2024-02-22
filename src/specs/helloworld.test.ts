import { expect, it } from "vitest";
import { mount } from '@vue/test-utils'
import HelloWorld from "../components/HelloWorld.vue";

it('display prop msg', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello'
    }
  })

  expect(wrapper.text()).toContain('Hello')
})