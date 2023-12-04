import sanityClient from '@sanity/client';


export const client =  sanityClient({
    projectId: "2bc63m11",
    dataset: "production",
    apiVersion: "2023-10-02",
    useCdn: true,
})