let defaultMain = [
    {
        "type": "header",
        "content": "Bố cục"
    },
    {
        "type": "text",
        "id": "blogs_number_perpage",
        "label": "Số bài viết trên trang"
    },
    {
        "type": "header",
        "content": "Tỉ lệ ảnh"
    },
    {
        "type": "text",
        "label": "Chiều rộng",
        "id": "blog_image_width_ratio"
    },
    {
        "type": "text",
        "label": "Chiều cao",
        "id": "blog_image_height_ratio"
    },
    {
        "type": "header",
        "content": "Danh mục tin tức"
    },
    {
        "type": "text",
        "id": "aside_category_blog_title",
        "label": "Tiêu đề"
    },
    {
        "type": "link_list",
        "id": "aside_category_blog_menu",
        "label": "Chọn menu"
    },
    {
        "type": "header",
        "content": "Tin liên quan (trang bài viết)"
    },
    {
        "type": "checkbox",
        "id": "blogs_related_enable",
        "label": "Hiển thị"
    },
    {
        "type": "text",
        "id": "blogs_related_title",
        "label": "Tiêu đề"
    },
    {
        "type": "text",
        "id": "blogs_related_limit",
        "label": "Giới hạn số bài viết"
    },
    {
        "type": "header",
        "content": "Tin nổi bật (trang blog)"
    },
    {
        "type": "checkbox",
        "id": "blogs_aside_enable",
        "label": "Hiển thị"
    },
    {
        "type": "text",
        "id": "blogs_aside_title",
        "label": "Tiêu đề"
    },
    {
        "type": "blog",
        "id": "blogs_aside_url",
        "label": "Đường dẫn"
    },
    {
        "type": "text",
        "id": "blogs_aside_limit",
        "label": "Giới hạn số bài viết"
    },
    {
        "type": "header",
        "content": "Trang bài viết"
    },
    {
        "type": "checkbox",
        "id": "article_featured_image",
        "label": "Hiển thị ảnh đại diện ở đầu nội dung bài viết"
    },
    {
        "type": "checkbox",
        "id": "article_toc_used",
        "label": "Hiển thị mục lục bài viết"
    },
    {
        "type": "text",
        "id": "article_toc_heading",
        "label": "Thẻ heading mục lục",
        "default": "h2,h3,h4"
    }
]

module.exports ={
    "name": "Trang blog",
    "settings": defaultMain
}