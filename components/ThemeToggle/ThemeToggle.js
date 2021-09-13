import IconSun from '@/assets/icons/icon-sun.svg';
import IconMoon from '@/assets/icons/icon-moon.svg';

export default {
  name: 'ThemeToggle',
  components: {
    IconMoon,
    IconSun
  },
  data () {
    return {
      html: { type: Object, default: () => ({}) },
      isDark: { type: Boolean, default: false }
    };
  },
  methods: {
    toggleDarkMode (e) {
      e.preventDefault();
      this.html.toggleAttribute('data-theme-dark');
      this.isDark = this.html.hasAttribute('data-theme-dark');
      localStorage.theme = (this.isDark) ? 'dark' : 'light';
    }
  },
  mounted () {
    this.html = document.querySelector('html');
    this.isDark = this.html.hasAttribute('data-theme-dark');
  }
};
