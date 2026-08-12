export default defineAppConfig({
  title: 'Forest Grove Links',
  documentation: 'https://docs.sink.cool',
  github: 'https://github.com/straun-repo/Sink',
  coffee: '',
  twitter: '',
  telegram: '',
  description: 'Short links for Forest Grove.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
