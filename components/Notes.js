import { gql } from 'graphql-request'

import graphCmsClient from '../lib/graphCmsClient'

function ProductPage({ product }) {
  return <pre>{JSON.stringify(product, null, 2)}</pre>
}

export async function getStaticPaths({ locales }) {
  let paths = []

  const { products } = await graphCmsClient.request(gql`
    {
      products {
        id
      }
    }
  `)

  for (const locale of locales) {
    paths = [
      ...paths,
      ...products.map((product) => ({ params: { id: product.id }, locale })),
    ]
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ locale, params }) {
  const { product } = await graphCmsClient.request(
    gql`
      query ProductPageQuery($id: ID!, $locale: Locale!) {
        product(where: { id: $id }, locales: [$locale]) {
          id
          description
          images {
            height
            url
            width
          }
          locale
          name
          price
          slug
        }
      }
    `,
    { id: params.id, locale }
  )

  return {
    props: {
      product,
    },
  }
}

export default ProductPage


//IndexPage


// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { gql } from 'graphql-request'

// import graphCmsClient from '../lib/graphCmsClient'

// function IndexPage({ products }) {
//   const router = useRouter()

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <Link href={product.id} locale={router.locale}>
//             <a>
//               <h1>{product.name}</h1>
//             </a>
//           </Link>
//         </div>
//       ))}
//     </div>
//   )
// }

// export async function getStaticProps({ locale }) {
//   const { products } = await graphCmsClient.request(
//     gql`
//       query IndexPageQuery($locale: Locale!) {
//         products(locales: [$locale]) {
//           id
//           locale
//           name
//           price
//           slug
//         }
//       }
//     `,
//     { locale }
//   )

//   return {
//     props: {
//       products,
//     },
//   }
// }

// export default IndexPage



// import Link from 'next/link'
// import { useRouter } from 'next/router'

// import '../styles/tailwind.css'

// function App({ Component, pageProps }) {
//   const router = useRouter()

//   return (
//     <div>
//       <ul>
//         {router.locales.map((locale) => (
//           <li key={locale}>
//             <Link href={router.asPath} locale={locale}>
//               <a>{locale}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <Component {...pageProps} />
//     </div>
//   )
// }

// export default App