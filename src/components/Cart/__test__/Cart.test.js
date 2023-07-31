// testing imports
import { render,screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

// setup imports
import { createMemoryRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { store } from '../../../store/index';
import { renderWithProviders } from '../../../test-utils';
import { routesConfig } from '../../../routesConfig';

// components
import Cart from '../Cart';
import CartItem from '../CartItem';
import CartTotal from '../CartTotal';


describe('cart component', () => {
    const initialCart = 
        [{
            id: 'asdfasdfasdf',
            product: {
                id: 'qwertyqwertyqwerty',
                description: 'this is test product',
                base_amt: '10.00',
                alt_description: 'this is a test product description',
                height: 4917,
                image_urls: {
                    raw: 'asdf',
                    full: 'asdf',
                    regular: 'asdf',
                    thumb: 'asdf',
                    small_s3: 'asdf',
                    small: 'asdf'
                },
                likes: '30',
                orientation: 'portrait',
                owner: {},
                quantity_available: 10,
                review_count: 900,
                tags: [
                    {
                        type: 'search',
                        title: 'tag1'
                    },
                    {
                        type: 'search',
                        title: 'tag2'
                    }
                ],
                width: 3934
            },
            quantity: 1,
            size: {
                width: 9,
                height: 12,
                price_multiplier: 1
            }
        }]

    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/']
    });

    const View = <Provider store={store}>
                    <Cart />
                </Provider>;

    jest.mock('react-redux', () => ({
        ...jest.requireActual('react-redux'), useSelector: mockItem
    }))

    it('should render', () => {
        renderWithProviders(<Cart />)
        const total = screen.getByText(/Subtotal/i)
        const checkoutBtn = screen.getByRole('button', {name: 'Checkout'})
        console.log(checkoutBtn)
        // screen.debug()

        expect(total).toBeInTheDocument()
        expect(checkoutBtn).toBeInTheDocument()
    })

    it('should display empty cart message, if nothing in cart', () => {

        renderWithProviders(<Cart/>, {preloadedState: {cart: []}})

        const cartEmptyMessage = screen.getByText(/your cart is empty/i)
        expect(cartEmptyMessage).toBeInTheDocument()

        const cartEmptyIcon = screen.getByText(/shopping_cart/i);
        expect(cartEmptyIcon).toBeInTheDocument()
    })

    it.only('should display a cart item', () => {

    //     // useSelector.mockImplementation(() => mockItem);
        renderWithProviders(<Cart />, {
            preloadedState: {
                cart: initialCart
            }
        })
        
        screen.debug()
    //     const items = screen.getAllByTestId('cart-items')
    //     console.log(items)
    })


})


const mockItem = [{
    "quantity": 1,
    "product": {
      "id": "ZCHj_2lJP00",
      "description": "none",
      "alt_description": "white and brown long fur cat",
      "image_urls": {
        "raw": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=M3w0Mjk1MTd8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDF8fHx8MTY5MDU3MjMzMnww&ixlib=rb-4.0.3",
        "full": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mjk1MTd8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDF8fHx8MTY5MDU3MjMzMnww&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Mjk1MTd8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDF8fHx8MTY5MDU3MjMzMnww&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Mjk1MTd8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDF8fHx8MTY5MDU3MjMzMnww&ixlib=rb-4.0.3&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Mjk1MTd8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDF8fHx8MTY5MDU3MjMzMnww&ixlib=rb-4.0.3&q=80&w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1592194996308-7b43878e84a6"
      },
      "tags": [
        {
          "type": "landing_page",
          "title": "cat",
          "source": {
            "ancestry": {
              "type": {
                "slug": "images",
                "pretty_slug": "Images"
              },
              "category": {
                "slug": "animals",
                "pretty_slug": "Animals"
              },
              "subcategory": {
                "slug": "cat",
                "pretty_slug": "Cat"
              }
            },
            "title": "Cat images & pictures",
            "subtitle": "Download free cat images",
            "description": "9 lives isn't enough to capture the amazing-ness of cats. You need high-quality, professionally photographed images to do that. Unsplash's collection of cat images capture the wonder of the kitty in high-definition, and you can use these images however you wish for free.",
            "meta_title": "20+ Cat Pictures & Images [HD] | Download Free Images & Stock Photos on Unsplash",
            "meta_description": "Choose from hundreds of free cat pictures. Download HD cat photos for free on Unsplash.",
            "cover_photo": {
              "id": "_SMNO4cN9vs",
              "slug": "_SMNO4cN9vs",
              "created_at": "2018-12-30T17:17:38Z",
              "updated_at": "2022-12-01T04:27:24Z",
              "promoted_at": "2019-01-01T10:23:58Z",
              "width": 4000,
              "height": 4000,
              "color": "#0c0c26",
              "blur_hash": "L012.;oL4=WBt6j@Rlay4;ay^iof",
              "description": "Glow in the Dark",
              "alt_description": "yellow eyes",
              "breadcrumbs": [],
              "urls": {
                "raw": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                "regular": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                "small": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                "thumb": "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1546190255-451a91afc548"
              },
              "links": {
                "self": "https://api.unsplash.com/photos/_SMNO4cN9vs",
                "html": "https://unsplash.com/photos/_SMNO4cN9vs",
                "download": "https://unsplash.com/photos/_SMNO4cN9vs/download",
                "download_location": "https://api.unsplash.com/photos/_SMNO4cN9vs/download"
              },
              "likes": 513,
              "liked_by_user": false,
              "current_user_collections": [],
              "sponsorship": null,
              "topic_submissions": {
                "animals": {
                  "status": "approved",
                  "approved_on": "2020-04-06T14:20:17Z"
                }
              },
              "premium": false,
              "plus": false,
              "user": {
                "id": "KlbPlQFM3j4",
                "updated_at": "2021-06-29T13:48:33Z",
                "username": "unlesbar_1608112_sink",
                "name": "Stephan Henning",
                "first_name": "Stephan",
                "last_name": "Henning",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": null,
                "location": "Germany",
                "links": {
                  "self": "https://api.unsplash.com/users/unlesbar_1608112_sink",
                  "html": "https://unsplash.com/ko/@unlesbar_1608112_sink",
                  "photos": "https://api.unsplash.com/users/unlesbar_1608112_sink/photos",
                  "likes": "https://api.unsplash.com/users/unlesbar_1608112_sink/likes",
                  "portfolio": "https://api.unsplash.com/users/unlesbar_1608112_sink/portfolio",
                  "following": "https://api.unsplash.com/users/unlesbar_1608112_sink/following",
                  "followers": "https://api.unsplash.com/users/unlesbar_1608112_sink/followers"
                },
                "profile_image": {
                  "small": "https://images.unsplash.com/profile-1531167540173-a920494357e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                  "medium": "https://images.unsplash.com/profile-1531167540173-a920494357e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                  "large": "https://images.unsplash.com/profile-1531167540173-a920494357e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": null,
                "total_collections": 3,
                "total_likes": 67,
                "total_photos": 0,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                  "instagram_username": null,
                  "portfolio_url": null,
                  "twitter_username": null,
                  "paypal_email": null
                }
              }
            }
          }
        },
        {
          "type": "landing_page",
          "title": "animal",
          "source": {
            "ancestry": {
              "type": {
                "slug": "images",
                "pretty_slug": "Images"
              },
              "category": {
                "slug": "animals",
                "pretty_slug": "Animals"
              }
            },
            "title": "Animals images & pictures",
            "subtitle": "Download free animals images",
            "description": "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
            "meta_title": "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
            "meta_description": "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
            "cover_photo": {
              "id": "YozNeHM8MaA",
              "slug": "YozNeHM8MaA",
              "created_at": "2017-04-18T17:00:04Z",
              "updated_at": "2023-07-21T05:01:26Z",
              "promoted_at": "2017-04-19T17:54:55Z",
              "width": 5184,
              "height": 3456,
              "color": "#f3f3c0",
              "blur_hash": "LPR{0ext~pIU%MRQM{%M%LozIBM|",
              "description": "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
              "alt_description": "selective focus photography of giraffe",
              "breadcrumbs": [],
              "urls": {
                "raw": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                "regular": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                "small": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                "thumb": "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492534513006-37715f336a39"
              },
              "links": {
                "self": "https://api.unsplash.com/photos/YozNeHM8MaA",
                "html": "https://unsplash.com/photos/YozNeHM8MaA",
                "download": "https://unsplash.com/photos/YozNeHM8MaA/download",
                "download_location": "https://api.unsplash.com/photos/YozNeHM8MaA/download"
              },
              "likes": 1525,
              "liked_by_user": false,
              "current_user_collections": [],
              "sponsorship": null,
              "topic_submissions": {
                "animals": {
                  "status": "approved",
                  "approved_on": "2021-06-09T15:10:40Z"
                }
              },
              "premium": false,
              "plus": false,
              "user": {
                "id": "J6cg9TA8-e8",
                "updated_at": "2023-07-02T01:31:44Z",
                "username": "judahlegge",
                "name": "Judah Legge",
                "first_name": "Judah",
                "last_name": "Legge",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": null,
                "location": null,
                "links": {
                  "self": "https://api.unsplash.com/users/judahlegge",
                  "html": "https://unsplash.com/@judahlegge",
                  "photos": "https://api.unsplash.com/users/judahlegge/photos",
                  "likes": "https://api.unsplash.com/users/judahlegge/likes",
                  "portfolio": "https://api.unsplash.com/users/judahlegge/portfolio",
                  "following": "https://api.unsplash.com/users/judahlegge/following",
                  "followers": "https://api.unsplash.com/users/judahlegge/followers"
                },
                "profile_image": {
                  "small": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                  "medium": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                  "large": "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "khoziemusic",
                "total_collections": 0,
                "total_likes": 4,
                "total_photos": 1,
                "accepted_tos": false,
                "for_hire": false,
                "social": {
                  "instagram_username": "khoziemusic",
                  "portfolio_url": null,
                  "twitter_username": null,
                  "paypal_email": null
                }
              }
            }
          }
        },
        {
          "type": "search",
          "title": "pet"
        }
      ],
      "base_amt": "8.49",
      "width": 5304,
      "height": 7952,
      "orientation": "portrait",
      "quantity_available": 0,
      "owner": {
        "id": "1LMzZNX562k",
        "updated_at": "2023-07-24T00:04:02Z",
        "username": "alvannee",
        "name": "Alvan Nee",
        "first_name": "Alvan",
        "last_name": "Nee",
        "twitter_username": "Alvan Nee",
        "portfolio_url": null,
        "bio": "I really love unsplash！！！！！",
        "location": "Shanghai, China",
        "links": {
          "self": "https://api.unsplash.com/users/alvannee",
          "html": "https://unsplash.com/@alvannee",
          "photos": "https://api.unsplash.com/users/alvannee/photos",
          "likes": "https://api.unsplash.com/users/alvannee/likes",
          "portfolio": "https://api.unsplash.com/users/alvannee/portfolio",
          "following": "https://api.unsplash.com/users/alvannee/following",
          "followers": "https://api.unsplash.com/users/alvannee/followers"
        },
        "profile_image": {
          "small": "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          "medium": "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          "large": "https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        "instagram_username": "alvan_nee",
        "total_collections": 0,
        "total_likes": 66,
        "total_photos": 172,
        "accepted_tos": true,
        "for_hire": false,
        "social": {
          "instagram_username": "alvan_nee",
          "portfolio_url": null,
          "twitter_username": "Alvan Nee",
          "paypal_email": null
        }
      },
      "likes": "35",
      "created_at": "2020-06-15T04:30:27Z",
      "review_count": 748
    },
    "size": {
      "width": 9,
      "height": 12,
      "price_multiplier": 1
    },
    "id": "ZCHj_2lJP00"
  }]