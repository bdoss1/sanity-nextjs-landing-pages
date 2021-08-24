export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612548fa2e2c400b388a24f2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pwem315k',
                  apiId: '249627c6-eceb-49d2-81e0-913f19370189'
                },
                {
                  buildHookId: '612548faeac2bc08ab438298',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gtaq8xyt',
                  apiId: 'd1cddb5b-1c6e-48eb-af13-4eb95cdef57a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bdoss1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gtaq8xyt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
