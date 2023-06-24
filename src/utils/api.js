import sanityClient from '../config/sanity';
let sanityQuery = (query, params)=> sanityClient.fetch(query, params);

export const getFeaturedResturants = ()=>{
    return sanityQuery(`
        *[_type == 'featured'] {
            ...,
            restaurants[]->{
            ...,
            type->{
                name
            },
            dishes[]->
            }
        }
    `);
}

export const getCategories = ()=>{
    return sanityQuery(`
       *[_type == 'category'] {
              name,
              description,
              image,
              _id,
            }
    `);
}

export const getCategoryById = (id)=>{
    return sanityQuery(`
       *[_type == 'category' && _id == $id] {
              name,
              description,
              image,
              _id,
            }
    `,{id});
}


export const getFeaturedResturantById = id=>{
    return sanityQuery(`
        *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `, {id})
}

export const getResturantById = id=>{
    return sanityQuery(`
        *[_type == 'restaurant' && _id == $id] {
            ...,
            phonenumber,
              address,
              _id,
                name,
                image,
                rating,
                email, 
                dishes[] -> {
                  name,
                  image,
                  price
                },
                dishes[] -> {
                  name,
                  image,
                  price
                }
        }
    `, {id})
}


export const getRestaurants = () => {
    return sanityQuery(`
        *[_type == 'restaurant'] {
              phonenumber,
              address,
              _id,
                name,
                image,
                rating,
                email, 
                dishes[] -> {
                  name
                }
            }
        `);
}


export const getDishes = ()=>{
    return sanityQuery(`
        *[_type == 'dish'] {
          _id,
            image,
            description,
            price, 
            name
        }
    `);
}

export const getDishById = (id)=>{
    return sanityQuery(`
        *[_type == 'dish' && _id == $id] {
          _id,
            image,
            description,
            price, 
            name
        }
    `,{id});
}