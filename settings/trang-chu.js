let defaultMain = [
    {
        "type": "header",
        "content": "Chọn các module"
    },
    {
        "type": "paragraph",
        "content": "Chúng tôi cung cấp các module ở trang chủ, bạn có thể lựa chọn và sắp xếp vị trí của chúng"
    },
]

let listSection = [
    {
        "value": "none",
        "label": "Không dùng"
    },
    {
        "value": "section_slider",
        "label": "Module Slideshow"
    },
    {
        "value": "section_coupons",
        "label": "Module Coupon"
    },
    {
        "value": "section_collections",
        "label": "Module Nhóm 10 banner"
    },
    {
        "value": "section_banner_coll_1",
        "label": "Module Nhóm 3 banner 1"
    },
    {
        "value": "section_banner_coll_2",
        "label": "Module Nhóm 3 banner 2"
    },
    {
        "value": "section_brand",
        "label": "Module Nhóm banner thương hiệu"
    },
    {
        "value": "section_banner_adv_delta",
        "label": "Module Banner (ngang)"
    },
    {
        "value": "section_flashsale",
        "label": "Module Sản phẩm Flash Sale"
    },
    {
        "value": "section_hot",
        "label": "Module Nhóm sản phẩm (Ảnh + Danh sách)"
    },
    {
        "value": "section_product_top_1",
        "label": "Module Nhóm sản phẩm (Tab) 1"
    },
    {
        "value": "section_product_top_2",
        "label": "Module Nhóm sản phẩm (Tab) 2"
    },
    {
        "value": "section_product_top_3",
        "label": "Module Nhóm sản phẩm (Tab) 3"
    },
    {
        "value": "section_blog",
        "label": "Module Tin Tức"
    },
    {
        "value": "bpr-products-module",
        "label": "Module Sản phẩm đánh giá mới nhất"
    },
    {
        "value": "section_home_policies",
        "label": "Module Chính sách"
    },
    {
        "value": "section_searchbyvehicle",
        "label": "Module Search"
    },
    {
        "value": "section_imgtext_1",
        "label": "Module Hình ảnh 1"
    },
    {
        "value": "section_imgtext_2",
        "label": "Module Hình ảnh 2"
    },
    {
        "value": "section_video",
        "label": "Module Video"
    },
    {
        "value": "section_store",
        "label": "Module Thông tin cửa hàng"
    },
    {
        "value": "section_lookbook",
        "label": "Module LookBook Sản phẩm"
    },
    {
        "value": "section_lookbook_one_product",
        "label": "Module LookBook Mô tả sản phẩm"
    },
    {
        "value": "section_expand_banner",
        "label": "Module Banner xếp"
    },
    {
        "value": "section_faq",
        "label": "Module Câu hỏi thường gặp"
    }
]
let zoneLoop = Array.from({length: 20}, (_, index) => {
    const sectionObj = {
        type: "select",
        id: `home_section_${index + 1}`,
        label: `Module ${index + 1}`,
        options: listSection
    };

    return sectionObj;
});

const combinedArray = [
    ...defaultMain,
    ...zoneLoop,
];

module.exports = {
    "name": "Trang chủ",
    settings: combinedArray
};