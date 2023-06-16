interface Slug {
    current: string;
    _type: string;
}

interface ImageCrop {
    top: number;
    left: number;
    bottom: number;
    right: number;
    _type: string;
}

interface ImageHotspot {
    y: number;
    height: number;
    width: number;
    x: number;
    _type: string;
}

interface ImageAsset {
    _ref: string;
    _type: string;
}

interface Image {
    asset: ImageAsset;
    _type: string;
    crop: ImageCrop;
    hotspot: ImageHotspot;
}

interface Author {
    _createdAt: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    image: Image;
    name: string;
    bio: {
        markDefs: any[];
        children: {
            _type: string;
            text: string;
        }[];
        _type: string;
        style: string;
        _key: string;
        _id: string;
    }[];
    slug: Slug;
    _id: string;
}

interface Category {
    _rev: string;
    _type: string;
    description: string;
    _id: string;
    title: string;
    _updatedAt: string;
    slug: Slug;
    _createdAt: string;
}

interface MainImageAsset {
    _ref: string;
    _type: string;
}

interface MainImage {
    asset: MainImageAsset;
    _type: string;
}

interface Post {
    _updatedAt: string;
    slug: Slug;
    _type: string;
    mainImage: MainImage;
    author: Author;
    _createdAt: string;
    title: string;
    _rev: string;
    category: Category;
    publishedAt: string;
    _id: string;
}
