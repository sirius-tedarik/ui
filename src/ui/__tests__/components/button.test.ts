import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Icon } from '@iconify/vue'
import { Button } from '../../components/index'

describe('buttonComponent', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Button)
    const button = wrapper.find('button')
    expect(button.classes()).toContain('sir-button')
    expect(button.classes()).toContain('md')
    expect(button.classes()).toContain('primary')
    expect(button.attributes('disabled')).toBeUndefined()
    expect(wrapper.findComponent(Icon).exists()).toBe(false)
  })

  it('applies fullWidth class when fullWidth prop is true', () => {
    const wrapper = mount(Button, {
      props: { fullWidth: true },
    })
    const button = wrapper.find('button')
    expect(button.classes()).toContain('w-full')
  })

  it('disables the button when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    const button = wrapper.find('button')
    expect(button.attributes('disabled')).toBeDefined()
  })

  it('shows loading icon when loading prop is true', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    expect(wrapper.findComponent(Icon).exists()).toBe(true)
  })

  // it('focuses on the button if autoFocus prop is true', async () => {
  //   const wrapper = mount(Button, {
  //     props: { autoFocus: true },
  //   })
  //   const button = wrapper.find('button')
  //   await button.trigger('focus')
  //   expect(document.activeElement).toBe(button.element)
  // })

  it('renders slot content when not loading', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span>Click Me!</span>',
      },
    })
    const slotContent = wrapper.find('span')
    expect(slotContent.text()).toBe('Click Me!')
    expect(wrapper.findComponent(Icon).exists()).toBe(false)
  })
})
