let defaultMain = [
    {
        "type": "checkbox",
        "id": "favicon_enable",
        "label": "Dùng favicon"
    },
    {
        "type": "image",
        "id": "favicon.png",
        "label": "Favicon",
        "info": "Đề nghị 91x91 px"
    },
    {
        "type": "image",
        "id": "share_fb_home.jpg",
        "label": "Hình ảnh chia sẻ trang chủ ",
        "info": "Đề nghị 600x315 px"
    },
    {
        "type": "checkbox",
        "id": "use_newsletter",
        "label": "Dùng công cụ nhận email khuyến mãi"
    },
    {
        "type": "checkbox",
        "id": "backtotop_enable",
        "label": "Dùng nút quay lên đầu trang"
    },
    {
        "type": "header",
        "content": "Thiết lập chung cho Sản Phẩm"
    },
    {
        "type": "checkbox",
        "id": "use_reviews",
        "label": "Dùng đánh giá sản phẩm",
        "info": "Vui lòng cài app đánh giá sản phẩm"
    },
    {
        "type": "checkbox",
        "label": "Đổi ảnh khi rê chuột vào sản phẩm",
        "id": "use_hover_change_image"
    },
    {
        "type": "checkbox",
        "id": "quickview_enable",
        "label": "Dùng nút xem nhanh (desktop)"
    },
    {
        "type": "checkbox",
        "id": "add_cart_enable",
        "label": "Dùng nút thêm vào giỏ "
    },
    {
        "type": "select",
        "id": "add_cart_variants",
        "label": "Sản phẩm nhiều phiên bản",
        "options": [
            {
                "value": "detail",
                "label": "Đi đến trang chi tiết sản phẩm"
            },
            {
                "value": "quickivew",
                "label": "Thêm nhanh sản phẩm ở quickview"
            }
        ]
    },
    {
        "type": "text",
        "id": "color_view_limit",
        "label": "Giới hạn số màu hiển thị",
        "default": 5
    },
    {
        "type": "select",
        "id": "color_view_style",
        "label": "Xem thêm màu sản phẩm",
        "options": [
            {
                "value": "detail",
                "label": "Đi đến trang chi tiết sản phẩm"
            },
            {
                "value": "quickview",
                "label": "Xem nhanh sản phẩm ở quickview"
            }
        ]
    },
    {
        "type": "header",
        "content": "Thông tin liên hệ chung"
    },
    {
        "type": "paragraph",
        "content": "Nêu bạn để trống sẽ tự động lấy thông tin lúc đăng ký site"
    },
    {
        "type": "text",
        "id": "email",
        "label": "Email"
    },
    {
        "type": "textarea",
        "id": "address",
        "label": "Địa chỉ"
    },
    {
        "type": "text",
        "id": "phone",
        "label": "Điện thoại"
    },
    {
        "type": "header",
        "content": "Màu sắc"
    },
    {
        "type": "color",
        "id": "main-color",
        "label": "Màu 1"
    },
    {
        "type": "color",
        "id": "secondary-color",
        "label": "Màu 2",
        "default": "#13a6ef"
    },
    {
        "type": "color",
        "id": "color_body_text",
        "label": "Màu chữ chính"
    },
    {
        "type": "color",
        "id": "color_price",
        "label": "Màu giá"
    },
    {
        "type": "color",
        "id": "color_bg_label",
        "label": "Màu nền % giá giảm"
    },
    {
        "type": "color",
        "id": "color_label",
        "label": "Màu chữ % giá giảm"
    },
    {
        "type": "color",
        "id": "color_buynow",
        "label": "Màu nút mua ngay"
    },
    {
        "type": "color",
        "id": "color_buynow_text",
        "label": "Màu chữ mua ngay"
    },
    {
        "type": "color",
        "id": "color_addcart",
        "label": "Màu nút thêm vào giỏ"
    },
    {
        "type": "color",
        "id": "color_addcart_text",
        "label": "Màu chữ thêm vào giỏ"
    },
    {
        "type": "color",
        "id": "color_checkout",
        "label": "Màu nút thanh toán"
    },
    {
        "type": "header",
        "content": "Meta keywords cho trang chủ(SEO)"
    },
    {
        "type": "textarea",
        "id": "home_page_keywords",
        "label": "Keywords cho trang chủ"
    },
    {
        "type": "header",
        "content": "Bộ nút icon liên hệ(desktop)"
    },
    {
        "type": "checkbox",
        "label": "Hiển thị bộ nút",
        "id": "addThis_listSharing"
    },
    {
        "type": "header",
        "content": "Icon Hotline"
    },
    {
        "type": "checkbox",
        "label": "Hiển thị",
        "id": "addthis_icon1_show"
    },
    {
        "type": "text",
        "label": "Ghi chú",
        "id": "addthis_icon1_tootlip"
    },
    {
        "type": "header",
        "content": "Sticky bar toàn trang"
    },
    {
        "type": "text",
        "id": "sticky_bar_hotline",
        "label": "Số điện thoại hotline",
        "info": "Không điền gì sẽ không hiển thị Icon"
    },
    {
        "type": "text",
        "id": "sticky_bar_messenger",
        "label": "Messenger",
        "info": "Không điền gì sẽ không hiển thị Icon"
    },
    {
        "type": "text",
        "id": "sticky_bar_zalo",
        "label": "Liên hệ zalo",
        "info": "Không điền gì sẽ không hiển thị Icon"
    },
    {
        "type": "header",
        "content": "Bộ nút tối ưu chuyển đổi(dưới mobile)"
    },
    {
        "type": "checkbox",
        "label": "Hiển thị bộ nút",
        "id": "cro_show"
    },
    {
        "type": "checkbox",
        "label": "Hiển thị nút mua hàng (trang sản phẩm)",
        "id": "cro_add_cart_show"
    },
    {
        "type": "header",
        "content": "Nút điều hướng 1"
    },
    {
        "type": "select",
        "id": "cro_home_show",
        "label": "Vị trí ",
        "options": [
            {
                "value": "0",
                "label": "Không hiển thị"
            },
            {
                "value": "1",
                "label": "1"
            },
            {
                "value": "2",
                "label": "2"
            },
            {
                "value": "3",
                "label": "3"
            },
            {
                "value": "4",
                "label": "4"
            },
            {
                "value": "5",
                "label": "5"
            }
        ]
    },
    {
        "type": "text",
        "label": "Tiêu đề",
        "id": "cro_home_title"
    },
    {
        "type": "text",
        "label": "Liên kết",
        "id": "cro_home_url"
    },
    {
        "type": "image",
        "label": "Icon",
        "id": "cro-home-icon.png"
    },
    {
        "type": "header",
        "content": "Nút điều hướng 2"
    },
    {
        "type": "select",
        "id": "cro_coll_show",
        "label": "Vị trí ",
        "options": [
            {
                "value": "0",
                "label": "Không hiển thị"
            },
            {
                "value": "1",
                "label": "1"
            },
            {
                "value": "2",
                "label": "2"
            },
            {
                "value": "3",
                "label": "3"
            },
            {
                "value": "4",
                "label": "4"
            },
            {
                "value": "5",
                "label": "5"
            }
        ]
    },
    {
        "type": "text",
        "label": "Tiêu đề",
        "id": "cro_coll_title"
    },
    {
        "type": "text",
        "label": "Liên kết",
        "id": "cro_coll_url"
    },
    {
        "type": "image",
        "label": "Icon",
        "id": "icon-cro-coll.png"
    },
    {
        "type": "header",
        "content": "Nút điều hướng 3"
    },
    {
        "type": "select",
        "id": "cro_blog_show",
        "label": "Vị trí ",
        "options": [
            {
                "value": "0",
                "label": "Không hiển thị"
            },
            {
                "value": "1",
                "label": "1"
            },
            {
                "value": "2",
                "label": "2"
            },
            {
                "value": "3",
                "label": "3"
            },
            {
                "value": "4",
                "label": "4"
            },
            {
                "value": "5",
                "label": "5"
            }
        ]
    },
    {
        "type": "text",
        "label": "Tiêu đề",
        "id": "cro_blog_title"
    },
    {
        "type": "text",
        "label": "Liên kết",
        "id": "cro_blog_url"
    },
    {
        "type": "image",
        "label": "Icon",
        "id": "icon-cro-blog.png"
    },
    {
        "type": "header",
        "content": "Nút gọi điện"
    },
    {
        "type": "select",
        "id": "cro_hotline_show",
        "label": "Vị trí ",
        "options": [
            {
                "value": "0",
                "label": "Không hiển thị"
            },
            {
                "value": "1",
                "label": "1"
            },
            {
                "value": "2",
                "label": "2"
            },
            {
                "value": "3",
                "label": "3"
            },
            {
                "value": "4",
                "label": "4"
            },
            {
                "value": "5",
                "label": "5"
            }
        ]
    },
    {
        "type": "image",
        "label": "Icon",
        "id": "cro-phone-icon.png"
    },
    {
        "type": "header",
        "content": "Nút nhắn tin"
    },
    {
        "type": "select",
        "id": "cro_mess_show",
        "label": "Vị trí ",
        "options": [
            {
                "value": "0",
                "label": "Không hiển thị"
            },
            {
                "value": "1",
                "label": "1"
            },
            {
                "value": "2",
                "label": "2"
            },
            {
                "value": "3",
                "label": "3"
            },
            {
                "value": "4",
                "label": "4"
            },
            {
                "value": "5",
                "label": "5"
            }
        ]
    },
    {
        "type": "image",
        "label": "Icon",
        "id": "cro-mess-icon.png"
    },
    {
        "type": "header",
        "content": "Nút giỏ hàng"
    },
    {
        "type": "checkbox",
        "label": "Hiển thị giỏ hàng (trang sản phẩm)",
        "id": "cro_cart_show"
    },
    {
        "type": "image",
        "label": "Icon",
        "id": "cro-cart-icon.png"
    },
    {
        "type": "header",
        "content": "Gắn facebook messenger"
    },
    {
        "type": "text",
        "id": "messenger",
        "label": "Facebook messenger",
        "info": "Ví dụ: https://m.me/[page]"
    },
    {
        "type": "header",
        "content": "Gắn Zalo OA"
    },
    {
        "type": "text",
        "id": "zalo",
        "label": "Zalo",
        "info": "Ví dụ: https://zalo.me//[page]"
    },
    {
        "type": "header",
        "content": "Popup khi vào website"
    },
    {
        "type": "checkbox",
        "id": "banner_popup_show",
        "label": "Hiển thị"
    },
    {
        "type": "text",
        "id": "banner_popup_alt",
        "label": "Thẻ alt"
    },
    {
        "type": "image",
        "id": "banner-popup-img.png",
        "label": "Chọn ảnh(.png chiều rộng tối đa 620px)"
    },
    {
        "type": "text",
        "id": "banner_popup_width",
        "label": "Chiều rộng",
        "default": "620",
        "info": "Đặt chiều rộng và chiều cao chính xác cho hình ảnh để cải thiện CLS (https://web.dev/optimize-cls/)"
    },
    {
        "type": "text",
        "id": "banner_popup_height",
        "label": "Chiều cao",
        "default": "725",
        "info": "Đặt chiều rộng và chiều cao chính xác cho hình ảnh để cải thiện CLS (https://web.dev/optimize-cls/)"
    },
    {
        "type": "text",
        "id": "banner_popup_url",
        "label": "Liên kết"
    },
    {
        "type": "header",
        "content": "Ảnh phương thức thanh toán"
    },
    {
        "type": "image",
        "id": "footer_trustbadge.jpg",
        "label": "Chọn ảnh",
        "info": "246x53 pixels"
    },
    {
        "type": "text",
        "id": "footer_trustbadge_width",
        "label": "Chiều rộng",
        "default": "246",
        "info": "Đặt chiều rộng và chiều cao chính xác cho hình ảnh để cải thiện CLS (https://web.dev/optimize-cls/)"
    },
    {
        "type": "text",
        "id": "footer_trustbadge_height",
        "label": "Chiều cao",
        "default": "53",
        "info": "Đặt chiều rộng và chiều cao chính xác cho hình ảnh để cải thiện CLS (https://web.dev/optimize-cls/)"
    },
    {
        "type": "text",
        "id": "footer_trustbadge_url",
        "label": "Link"
    },
    {
        "type": "text",
        "id": "footer_trustbadge_title",
        "label": "Thẻ Alt / Tiêu đề dưới "
    },
    {
        "type": "header",
        "content": "Khoảng cách của section"
    },
    {
        "type": "text",
        "id": "spacing_top",
        "label": "Khoảng cách section phía trên (desktop)",
        "info": "Chỉ nhập số, không nhập thêm đơn vị px"
    },
    {
        "type": "text",
        "id": "spacing_bottom",
        "label": "Khoảng cách section bên dưới (desktop)",
        "info": "Chỉ nhập số, không nhập thêm đơn vị px"
    },
    {
        "type": "text",
        "id": "spacing_top_mb",
        "label": "Khoảng cách section phía trên (mobile)",
        "info": "Chỉ nhập số, không nhập thêm đơn vị px"
    },
    {
        "type": "text",
        "id": "spacing_bottom_mb",
        "label": "Khoảng cách section bên dưới (mobile)",
        "info": "Chỉ nhập số, không nhập thêm đơn vị px"
    }
]

const combinedArray = [
    ...defaultMain,
];

module.exports = {
    name: "Thiết lập chung",
    settings: combinedArray
};