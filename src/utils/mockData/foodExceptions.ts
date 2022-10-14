import { number } from "yup";

export const foods = [
  {
    id: 0,
    name: 'Грибы Основное',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Основные блюда',
      category: {
        id: 1,
        name: 'Горячие блюда'
      }
    }
  },
  {
    id: 1,
    name: 'Грибы Основное',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Основные блюда',
      category: {
        id: 1,
        name: 'Горячие блюда'
      }
    }
  },
  {
    id: 2,
    name: 'Рататуй Основное',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Основные блюда',
      category: {
        id: 1,
        name: 'Горячие блюда'
      }
    }
  },
  {
    id: 3,
    name: 'Пюре с грибами Основное',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Основные блюда',
      category: {
        id: 1,
        name: 'Горячие блюда'
      }
    }
  },
  {
    id: 4,
    name: 'Мясной пирог Основное',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Основные блюда',
      category: {
        id: 1,
        name: 'Горячие блюда'
      }
    }
  },
  {
    id: 5,
    name: 'Рататуй Супы',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Супы',
      category: {
        id: 1,
        name: 'Горячие блюда'
      }
    }
  },
  {
    id: 6,
    name: 'Пюре с грибами Супы',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Супы',
      category: {
        id: 1,
        name: 'Горячие блюда'
      }
    }
  },
  {
    id: 7,
    name: 'Мясной пирог Супы',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Супы',
      category: {
        id: 1,
        name: 'Горячие блюда'
      }
    }
  },
  {
    id: 8,
    name: 'Рататуй Салаты',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Салаты',
      category: {
        id: 1,
        name: 'Салаты'
      }
    }
  },
  {
    id: 9,
    name: 'Пюре с грибами Салаты',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Салаты',
      category: {
        id: 1,
        name: 'Салаты'
      }
    }
  },
  {
    id: 10,
    name: 'Мясной пирогСалаты',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Салаты',
      category: {
        id: 1,
        name: 'Салаты'
      }
    }
  },
  {
    id: 11,
    name: 'Рататуй Закуски',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Закуски',
      category: {
        id: 1,
        name: 'Салаты'
      }
    }
  },
  {
    id: 12,
    name: 'Пюре с грибами Закуски',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Закуски',
      category: {
        id: 1,
        name: 'Салаты'
      }
    }
  },
  {
    id: 13,
    name: 'Мясной пирог Закуски',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Закуски',
      category: {
        id: 1,
        name: 'Салаты'
      }
    }
  },
  {
    id: 14,
    name: 'Мясной пирог Закуски',
    desc: 'Мясо обжаренное сверху и сбоку',
    weight: 1000,
    price: 350,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    subcategory: {
      id: 2,
      name: 'Закуски',
      category: {
        id: 1,
        name: 'Салаты'
      }
    }
  }
];