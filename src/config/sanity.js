import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'jnei1isq',
    dataset: 'production',
    apiVersion: '2021-08-31',
    token: 'sk45FFJCMKk6cyjEyZzF974iieTLaCW7nKBeU2TsNDKz1P9yv7VOicKy9EDagES4byKko9gi2tczXZJ4U8rwg2PGvPPqSs1PbirNk69vooX6A6qb7uz7HREqDbHG4UYAKsmkB2ngdoSBHlTNwP9NSkwvRkMMTJ4YNbvpGEWKfOfJRtwOxrpe', 
    useCdn: false,
})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;