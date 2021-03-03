// let response = {
//     "lastUpdatedAt": "2021-02-25T22:05:55+06:00",
//     "menuItems": {
//         "categories": [{
//                 "id": "{6AFAEBE5-0D99-4953-A737-C48F526E537B}",
//                 "name": "Салаты"
//             },
//             {
//                 "id": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца"
//             },
//             {
//                 "id": "{F3E7D2D0-1A29-4AA9-AC10-D276EE98BF4B}",
//                 "name": "На  пробу"
//             },
//             {
//                 "id": "{B202EE09-BF3A-4941-9A7F-309443E89133}",
//                 "name": "Суши"
//             },
//             {
//                 "id": "{2840FC3D-73D8-4187-81AA-A1EF9CE48114}",
//                 "name": "Напитки"
//             }
//         ],
//         "products": [{
//                 "id": "{A8AF080C-02F1-41D3-9E53-BA8B910FA96B}",
//                 "categoryId": "{2840FC3D-73D8-4187-81AA-A1EF9CE48114}",
//                 "name": "Голубцы ленивые",
//                 "price": 100,
//                 "description": "Жарим",
//                 "imageUrl": "http://api.sottos.ru/images/default.png",
//                 "byWeight": false,
//                 "weight": "333"
//             },
//             {
//                 "id": "{3DE54145-C0B8-431A-8DE0-CCBAD548C1BA}",
//                 "categoryId": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца Маргарита",
//                 "price": 580,
//                 "description": "Тесто, соус для пиццы, сыр моцарелла, томаты свежие (32 см)",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/76.jpg",
//                 "byWeight": false,
//                 "weight": "400"
//             },
//             {
//                 "id": "{4B29BD58-0BDA-4CBA-BE3F-B87FDC7A6EE7}",
//                 "categoryId": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца Пеперрони",
//                 "price": 750,
//                 "description": "Тесто, соус для пиццы, сыр моцарелла, пепперони, сыр пармезан (32 см)",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/77.jpg",
//                 "byWeight": false,
//                 "weight": "380"
//             },
//             {
//                 "id": "{3B137638-1D38-452C-ACEA-ADBB4D66E04A}",
//                 "categoryId": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца мясная",
//                 "price": 850,
//                 "description": "Тесто, соус для пиццы, сыр моцарелла, ветчина, колбаски охотничьи, пепперони (32 см)",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/78.jpg",
//                 "byWeight": false,
//                 "weight": "420"
//             },
//             {
//                 "id": "{F8A30C37-0A6E-405C-9CCF-758CDE27D5D2}",
//                 "categoryId": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца Грибная",
//                 "price": 700,
//                 "description": "Тесто, соус сметанный, шампиньоны, сыр моцарелла, лук зеленый (32 см)",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/79.jpg",
//                 "byWeight": false,
//                 "weight": "460"
//             },
//             {
//                 "id": "{2E394E6B-5D70-4D5F-AD83-F1FD50FAE1BC}",
//                 "categoryId": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца Карбонара",
//                 "price": 700,
//                 "description": "Тесто, соус томатный, карбонад, бекон, моцарелла, помидоры (32 см)",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/80.jpg",
//                 "byWeight": false,
//                 "weight": "400"
//             },
//             {
//                 "id": "{442F46F9-CD35-4B0B-96C5-2CB32E21BCC1}",
//                 "categoryId": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца с морепродуктами",
//                 "price": 750,
//                 "description": "Тесто, соус цезарь, креветки, форель, моцарелла, лимон (32 см)",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/81.jpg",
//                 "byWeight": false,
//                 "weight": "450"
//             },
//             {
//                 "id": "{F401F388-4D41-4087-BB96-BE4F06F9FBEA}",
//                 "categoryId": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца с ветчиной",
//                 "price": 700,
//                 "description": "Тесто, моцарелла, ветчина, соус томатный (32 см)",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/82.jpg",
//                 "byWeight": false,
//                 "weight": "420"
//             },
//             {
//                 "id": "{E3E4B75C-CA2F-4A5B-AF0C-E357F9EA47C6}",
//                 "categoryId": "{9E458F8B-832B-4823-B9EB-960DCE372DAE}",
//                 "name": "Пицца с курицей",
//                 "price": 700,
//                 "description": "Тесто, соус цезарь, курица, помидоры, моцарелла, пекинская капуста (32 см)",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/83.jpg",
//                 "byWeight": false,
//                 "weight": "460"
//             },
//             {
//                 "id": "{EF010775-85C4-4C8C-8782-1DF39E976040}",
//                 "categoryId": "{F3E7D2D0-1A29-4AA9-AC10-D276EE98BF4B}",
//                 "name": "Блюдо на пробу",
//                 "price": 10,
//                 "description": "Огурцы, помидоры, болгарский перец, лист салата, маслины, сыр фета, оливковое масло",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/87.jpg",
//                 "byWeight": false,
//                 "weight": "150"
//             },
//             {
//                 "id": "{E0F22D73-228D-4A2E-AF73-DE4026176A8C}",
//                 "categoryId": "{B202EE09-BF3A-4941-9A7F-309443E89133}",
//                 "name": "Суши Суша",
//                 "price": 10,
//                 "description": "Вкусная суша",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/88.jpg",
//                 "byWeight": false,
//                 "weight": "580"
//             },
//             {
//                 "id": "{7A54E1EB-BE0B-47B4-8ABC-93EFD24DE332}",
//                 "categoryId": "{B202EE09-BF3A-4941-9A7F-309443E89133}",
//                 "name": "Суши якиманаки",
//                 "price": 10,
//                 "description": "Тест",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/89.jpg",
//                 "byWeight": false,
//                 "weight": "100"
//             },
//             {
//                 "id": "{E546466B-101F-4762-B6F6-F15612740E90}",
//                 "categoryId": "{6AFAEBE5-0D99-4953-A737-C48F526E537B}",
//                 "name": "Салат Цезарь +",
//                 "price": 450,
//                 "description": "Куриная грудка, помидорки Черри, яйцо перепелиное, пекинская капуста, сыр, сухарики, соус цезарь",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/84.jpg",
//                 "byWeight": false,
//                 "weight": "150",
//             },
//             {
//                 "id": "{BE7556EF-F58F-46CF-810C-842DBAB86E70}",
//                 "categoryId": "{6AFAEBE5-0D99-4953-A737-C48F526E537B}",
//                 "name": "Салат Морской",
//                 "price": 510,
//                 "description": "Кальмары, яйцо, лук репчатый, сыр голландский, зелень, майонез",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/85.jpg",
//                 "byWeight": false,
//                 "weight": "150",
//             },
//             {
//                 "id": "{F27EC19C-BF14-4C58-9BCA-5C30A33A2C47}",
//                 "categoryId": "{6AFAEBE5-0D99-4953-A737-C48F526E537B}",
//                 "name": "Салат Греческий",
//                 "price": 450,
//                 "description": "Огурцы, помидоры, болгарский перец, лист салата, маслины, сыр фета, оливковое масло",
//                 "imageUrl": "http://api.sottos.ru/images/papas_pizza_tmp/86.jpg",
//                 "byWeight": false,
//             }
//         ]
//     }
// };

let link = "http://194.63.158.122:3100/deliverycustom/menus/rest1"

function getMenu() {
    console.log('ура');
    let request = new XMLHttpRequest();
    request.open('GET', link);
    request.setRequestHeader('Origin', 'http://194.63.158.122:3100');
    request.setRequestHeader('Authorization', 'Basic ZGVsaXZlcnljdXN0b211c2VyOjJkNjYzYWVlLWE1YWYtNDAwZC04OGZlLTQ4OWVhYTY0YTNmYw==');
    request.send();
}
// getMenu();

let categories = response.menuItems.categories,
    products = response.menuItems.products,
    categoryIds = [],
    categoryNames = [],
    categoryBox = [];

categories.forEach(c => {
    categoryIds.push(c.id.replace(/[{}]/gm, ''));
    categoryNames.push(c.name);
});

console.log(categories);
console.log(products);
console.log(categoryIds);
console.log(categoryNames);
console.log(categoryBox);

window.addEventListener('DOMContentLoaded', function() {

    function createReviewItems() {
        let reviewsView = document.querySelector('.reviews__view'),
            reviewsNav = document.querySelector('.reviews__nav');

        for (let i = 0; i < reviews.length; i++) {
            let navItem = document.createElement('div'),
                navWrapper = document.createElement('div'),
                navAvatar = document.createElement('img'),
                navTextBox = document.createElement('div'),
                navName = document.createElement('p'),
                navInsta = document.createElement('p');

            let viewItem = document.createElement('div'),
                viewWrapper = document.createElement('div'),
                viewProduct = document.createElement('img'),
                viewTextBox = document.createElement('div'),
                viewName = document.createElement('p'),
                viewAvatar = document.createElement('img'),
                viewText = document.createElement('p');

            navItem.classList.add('reviews__nav-item');
            navWrapper.classList.add('reviews__nav-item-inner');
            navAvatar.classList.add('reviews__nav-img');
            navTextBox.classList.add('reviews__nav-text-box');
            navName.classList.add('reviews__nav-name');
            navInsta.classList.add('reviews__nav-insta');

            viewItem.classList.add('reviews__view-item');
            viewWrapper.classList.add('reviews__view-wrapper');
            viewProduct.classList.add('reviews__view-img');
            viewTextBox.classList.add('reviews__view-text-box');
            viewName.classList.add('reviews__view-name');
            viewAvatar.classList.add('reviews__view-avatar');
            viewText.classList.add('reviews__view-text');

            navAvatar.setAttribute('alt', 'autor image');
            navAvatar.setAttribute('src', 'images/content/reviews/avatars/' + reviews[i].avatar);
            navAvatar.setAttribute('loading', 'lazy');
            navName.textContent = reviews[i].name;
            navInsta.textContent = reviews[i].insta;

            viewAvatar.setAttribute('alt', 'autor image');
            viewAvatar.setAttribute('src', 'images/content/reviews/avatars/' + reviews[i].avatar);
            viewAvatar.setAttribute('loading', 'lazy');

            viewProduct.setAttribute('alt', 'product image');
            viewProduct.setAttribute('src', 'images/content/reviews/' + reviews[i].image);
            viewProduct.setAttribute('loading', 'lazy');
            viewName.append(viewAvatar);
            viewName.innerHTML = viewName.innerHTML + reviews[i].name;
            viewText.textContent = reviews[i].text;

            navItem.append(navWrapper);
            navWrapper.append(navAvatar);
            navWrapper.append(navTextBox);
            navTextBox.append(navName);
            navTextBox.append(navInsta)

            viewItem.append(viewWrapper);
            viewWrapper.append(viewProduct);
            viewWrapper.append(viewTextBox);
            viewTextBox.append(viewName);
            viewTextBox.append(viewText);

            reviewsNav.append(navItem);
            reviewsView.append(viewItem);
        }
    }

    function createGalleryItems() {
        let galleryBox = document.querySelector('.gallery__slider');
        for (let i = 0; i < gallery.length; i++) {
            let wrapper = document.createElement('div'),
                image = document.createElement('img');

            wrapper.classList.add('gallery__wrapper');
            image.classList.add('gallery__img');

            image.setAttribute('alt', 'gallery image');
            image.setAttribute('src', 'images/content/gallery/' + gallery[i]);

            wrapper.append(image);
            galleryBox.append(wrapper);
        }

    }

    function createProductItems() {

        for (let i = 0; i < products.length; i++) {

            let card = document.createElement('div'),
                image = document.createElement('img'),
                box = document.createElement('div'),
                textBox = document.createElement('div'),
                title = document.createElement('h4'),
                discr = document.createElement('p'),
                cart = document.createElement('div'),
                select = document.createElement('div'),
                priceBox = document.createElement('p'),
                price = document.createElement('span'),
                unit = document.createElement('span'),
                input = document.createElement('input'),
                btn = document.createElement('button');

            card.id = products[i].id.replace(/[{}]/gm, '');

            card.classList.add('assortment__card');
            card.classList.add('card');
            image.classList.add('card__img');
            box.classList.add('card__box');
            textBox.classList.add('card__text-box');
            cart.classList.add('card__to-cart-box');
            title.classList.add('card__title');
            discr.classList.add('card__discription');
            select.classList.add('card__select');
            priceBox.classList.add('card__price-box');
            price.classList.add('card__price')
            unit.classList.add('card__unit')
            input.classList.add('card__input');
            btn.classList.add('card__button')

            card.setAttribute('type', categoryIds.indexOf(products[i].categoryId.replace(/[{}]/gm, '')))
            image.setAttribute('alt', 'product image');
            image.setAttribute('src', products[i].imageUrl);
            image.setAttribute('onerror', "this.src='images/main/no-image.png'");
            image.setAttribute('loading', 'lazy');
            input.setAttribute('type', 'number');
            input.setAttribute('value', 1);
            input.setAttribute('min', 1);
            input.setAttribute('max', 99);

            title.textContent = products[i].name;
            discr.textContent = products[i].description;
            price.textContent = products[i].price;
            if (products[i].byWeight) {
                unit.textContent = 'кг';
            } else {
                unit.textContent = 'шт';
            }
            btn.textContent = "Добавить в корзину"

            if (discr.textContent == '') {
                card.classList.add('no-discription');
            }

            card.append(image);
            textBox.append(title);
            textBox.append(discr);
            box.append(textBox);
            priceBox.append(price);
            priceBox.innerHTML = priceBox.innerHTML + " ₽ / ";
            priceBox.append(unit);
            select.append(priceBox);
            select.append(input);
            cart.append(select);
            cart.append(btn);
            box.append(cart);
            card.append(box);

            let pos = categoryIds.indexOf(products[i].categoryId.replace(/[{}]/gm, ''));
            categoryBox[pos].append(card);

        }
    }

    function createMenuItems() {
        let filter = document.querySelector('.assortment__filter'),
            content = document.querySelector('.assortment__content'),
            len = categoryIds.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {

                let btn = document.createElement('button'),
                    box = document.createElement('div');

                btn.classList.add('assortment__filter-btn');
                box.classList.add('assortment__box');
                box.classList.add('assortment__box--category' + i);
                if (i == 0) {
                    btn.classList.add('assortment__filter-btn--active');
                    box.classList.add('assortment__box--active');
                }

                btn.setAttribute('value', 'category' + i);
                btn.textContent = categoryNames[i];

                filter.append(btn);
                content.append(box);
                categoryBox.push(box);
            }
        } else {
            filter.textContent = "Данные не загружены. Попробуйте перезагрузить страницу."
        }
    }

    createMenuItems();
    createProductItems();
    createGalleryItems();
    createReviewItems();

    main();
})

var main =
    function() {

        // Мобильное меню
        $('.burger').on('click', function() {
            $('.popup__wrapper').fadeIn();
            $('.nav__list').addClass('show');
        });
        $('.cancel').on('click', function() {
            $('.nav__list').removeClass('show');
            $('.popup__wrapper').fadeOut();
        })

        // Табы в ассортименте
        const tabsContent = document.querySelectorAll('.assortment__box');
        tabsContent.forEach(element => {
            $(element).addClass('hide');
            $(element).addClass('invisible');
        })
        $(tabsContent[0]).removeClass('hide');
        $(tabsContent[0]).removeClass('invisible');
        $('.assortment__filter-btn').on('click', function(event) {
            event.preventDefault;
            let targetName = $(event.target).attr('value'),
                activeBtn = $('.assortment__filter-btn--active'),
                activeContent = $('.assortment__box--active'),
                targetContent = $('.assortment__box--' + targetName);
            $(event.target).addClass('assortment__filter-btn--active');
            activeContent.addClass('invisible')
            setTimeout(function() {
                activeBtn.removeClass('assortment__filter-btn--active');
                activeContent.removeClass('assortment__box--active');
                activeContent.addClass('hide');
                targetContent.removeClass('hide');
                targetContent.removeClass('invisible');
                targetContent.addClass('assortment__box--active');
            }, 300);
        });

        // Стилизация инпута
        $('.card__input, .row__input').styler();

        // SlickSlider
        $('.reviews__view').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: true,
            asNavFor: '.reviews__nav'
        });
        $('.reviews__nav').slick({
            vertical: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.reviews__view',
            focusOnSelect: true
        });

        $('.gallery__slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }]

        });

        // Плавный скролл
        $('.nav__link, .order-btn').on('click', function(event) {
            event.preventDefault();
            var id = $(this).attr('href');
            var element = $(id).offset().top;
            $('body,html').animate({
                scrollTop: element
            }, 500);
        });

        // События при прокрутке экрана
        $(window).on('scroll', function() {
            // Кнопка наверх
            if ($(this).scrollTop() > $('#assortment').offset().top + 500) {
                $('.top-btn').fadeIn();
            } else {
                $('.top-btn').fadeOut();
            }

            // Кнопка корзины
            count = Number(document.querySelector('.cart__counter').textContent);
            if ($(this).scrollTop() > $('#assortment').offset().top - 200 && count > 0) {
                $('.cart__btn').addClass('fixed-btn');
            } else {
                $('.cart__btn').removeClass('fixed-btn');
            }

        });
        // переход по кнопке наверх
        $('.top-btn').on('click', function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });


        //
        //  КОРЗИНА
        //

        // Открытие корзины
        $('.cart__btn').on('click', function(event) {
            event.preventDefault();
            reCalc();
            $('.popup__wrapper').fadeIn();
            $('.cart').show();
            $('.confirm').hide();
            $('body').addClass('fixed');
        });
        // Закрытие корзины при нажатии вне
        $('.popup, .nav__link').on('click', function(event) {
            if (!$(event.target).closest('.into').length) {
                hidePopPup();
            }
        });

        let rows = document.querySelector('.cart__row-box');
        // Добавление новой строки в корзину
        $('.card__button').on('click', function(event) {
            let card = event.target.parentElement.parentElement.parentElement,
                types = ["Торт", "Пироженное", "Эклер", "", ""],
                elementId = '#code' + card.id,
                element = document.querySelector(elementId);
            if (typeof element != 'undefined' && element != null) {
                element.querySelector('input.row__input').value =
                    Number(element.querySelector('input.row__input').value) +
                    Number(card.querySelector('input.card__input').value)
            } else {
                let type = types[card.getAttribute('type')],
                    title = card.querySelector('.card__title').textContent,
                    count = card.querySelector('input.card__input').value,
                    price = card.querySelector('.card__price').textContent,
                    unit = card.querySelector('.card__unit').textContent,
                    row = createCartRow(
                        type,
                        title,
                        count,
                        price,
                        unit
                    );
                row.id = 'code' + card.id;
                rows.append(row);
                $('.row__input').styler();
            }
            reCalc();
        });

        // Создание новой строки для корзины
        function createCartRow(type, title, value, cost, unit) {
            let row = document.createElement('div'),
                text = document.createElement('p'),
                select = document.createElement('div'),
                box = document.createElement('div'),
                price = document.createElement('span'),
                per = document.createElement('span'),
                input = document.createElement('input'),
                btn = document.createElement('button');

            row.classList.add('cart__row');
            row.classList.add('row');
            text.classList.add('row__text');
            select.classList.add('row__select-box');
            box.classList.add('row__price-box');
            price.classList.add('row__price');
            per.classList.add('row__unit');
            input.classList.add('row__input');
            btn.classList.add('row__delete-btn');

            input.setAttribute('type', 'number');
            input.setAttribute('min', '1');
            input.setAttribute('max', '99');
            input.setAttribute('value', value);

            text.textContent = (type == "") ? title : type + ' «' + title + '»';
            price.textContent = cost;
            per.textContent = unit;

            box.append(price);
            box.innerHTML = box.innerHTML + ' ₽/';
            box.append(per);

            select.append(box);
            select.append(input);

            row.append(text);
            row.append(select);
            row.append(btn);

            return row;
        }

        // Удаление строки в корзине
        $(document).on('click', '.row__delete-btn', function(event) {
            event.target.parentElement.remove();
            reCalc();
        });

        // Пресчет товара в корзине
        function reCalc() {
            let price = document.querySelectorAll('.row__price'),
                input = document.querySelectorAll('input.row__input'),
                total = document.querySelector('.cart__total-digit'),
                counter = document.querySelector('.cart__counter'),
                count = 0,
                sum = 0;
            if (price.length > 0) {
                for (let i = 0; i < price.length; i++) {
                    sum = sum + price[i].textContent * input[i].value;
                    count = count + Number(input[i].value);
                }

            }
            if (count > 0) {
                $(counter).fadeIn();
                $('.cart__total').show();
                $('.cart__total-text').text('Итого к оплате:');
                $('.cart__submit').text('Оформить заказ');
                if ($(window).scrollTop() > $('#assortment').offset().top - 200) {
                    $('.cart__btn').addClass('fixed-btn');
                }
            } else {
                $(counter).fadeOut();
                $('.cart__total').hide();
                $('.cart__total-text').text('Корзина пуста');
                $('.cart__submit').text('Закрыть');
                $('.cart__btn').removeClass('fixed-btn');
            }
            if (count > 99) {
                count = "K+"
            }
            counter.textContent = count;
            total.textContent = sum;
        };

        // Обработка измениения кол-ва в корзине кнопками
        $(document).on('input', 'input.row__input', function() {
            reCalc();
        });

        // Подтверждение корзины (переход к вводу дперсональных данных)
        $('.cart__submit').on('click', function() {
            if ($('.cart__counter').text() == 0) {
                hidePopPup();
                return;
            }
            $('.cart').fadeOut();
            setTimeout(showConfirm, 500);
        });

        // Показ окна ввода персональных данных
        function showConfirm() {
            $('.confirm').fadeIn();
        }

        // Скрытие всплывающих окон
        function hidePopPup() {
            $('.popup__wrapper').fadeOut();
            $('body').removeClass('fixed');
            $('.into').hide();
            $('.nav__list').removeClass('show');
        }

    };