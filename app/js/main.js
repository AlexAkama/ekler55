let filter = document.querySelector('.assortment__filter'),
    content = document.querySelector('.assortment__content'),
    response;

let restaurantId = 'ekler',
    baseURL = 'https://api.sottos.ru/delivery/ekler/deliverycustom',
    menuLink = baseURL + '/menus/' + restaurantId,
    orderLink = baseURL + '/orders/' + restaurantId,
    auth = 'Basic ZGVsaXZlcnljdXN0b211c2VyOjJkNjYzYWVlLWE1YWYtNDAwZC04OGZlLTQ4OWVhYTY0YTNmYw==';

let categories = [],
    products = [],
    categoryIds = [],
    categoryNames = [],
    categoryBox = [];

window.addEventListener('DOMContentLoaded', function() {

    createGalleryItems();
    createReviewItems();

    // getMenu();
    main();

})

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

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

function createGalleryItems() {
    let galleryBox = document.querySelector('.gallery__slider');
    for (let i = 0; i < gallery.length; i++) {
        let wrapper = document.createElement('div'),
            image = document.createElement('img'),
            number = document.createElement('div');

        wrapper.classList.add('gallery__wrapper');
        image.classList.add('gallery__img');
        number.classList.add('gallery__number');

        image.setAttribute('alt', 'gallery image');
        image.setAttribute('src', 'images/content/gallery/' + gallery[i]);

        number.textContent = gallery[i].replace(/\..*/, '');

        wrapper.append(image);
        wrapper.append(number);
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
        if (products[i].weight == 'шт') {
            unit.textContent = 'шт';
        } else {
            unit.textContent = 'кг';
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

    console.log("Cозданы карточки товаров");

    // Стилизация инпута
    $('.card__input, .row__input').styler();

    main();

}

function createMenuItems() {
    let len = categoryIds.length;
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
        console.log("Созданы элементы категорий");
        createProductItems();
    } else {
        content.classList.add('error');
        content.innerHTML = "Нет данных для отображения.<br>Попробуйте перезагрузить страницу."
    }
}

function getMenu() {
    let request = new XMLHttpRequest();
    request.open('GET', menuLink);
    request.setRequestHeader('Authorization', auth);
    request.send();
    console.log("Запрос отправлен");
    request.onreadystatechange = function() {
        if (request.readyState < 4) {
            console.log("Загрузка данных");
            content.textContent = "Загрузка данных..";
        } else if (request.readyState === 4 && request.status == 200) {
            console.log("Ответ получен");
            content.textContent = "";
            content.classList.remove('error');
            response = JSON.parse(request.response);
            categories = response.menuItems.categories;
            products = response.menuItems.products;
            categories.sort(byField('sortOrder'));
            products.sort(byField('sortOrder'));
            categories.forEach(c => {
                categoryIds.push(c.id.replace(/[{}]/gm, ''));
                categoryNames.push(c.name);
            });
            console.log("Получены данные из ответа");
            createMenuItems();
        } else {
            console.log("Ошибка: данные не загружены");
            content.classList.add('error');
            content.innerHTML = "Данные не загружены.<br>Попробуйте перезагрузить страницу."
            main();
        }
    }
}

function main() {

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
        localStorage.setItem('ekler55', targetName);
        setTimeout(function() {
            activeBtn.removeClass('assortment__filter-btn--active');
            activeContent.removeClass('assortment__box--active');
            activeContent.addClass('hide');
            targetContent.removeClass('hide');
            targetContent.removeClass('invisible');
            targetContent.addClass('assortment__box--active');
        }, 300);
    });

    // SlickSlider
    $('.hollyday__slider-box').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

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
            // types = ["", "", "", "", ""],
            elementId = '#code' + card.id,
            element = document.querySelector(elementId);
        if (typeof element != 'undefined' && element != null) {
            element.querySelector('input.row__input').value =
                Number(element.querySelector('input.row__input').value) +
                Number(card.querySelector('input.card__input').value)
        } else {
            let
                // type = types[card.getAttribute('type')],
                title = card.querySelector('.card__title').textContent,
                count = card.querySelector('input.card__input').value,
                price = card.querySelector('.card__price').textContent,
                unit = card.querySelector('.card__unit').textContent,
                row = createCartRow(
                    // type,
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
    // function createCartRow(type, title, value, cost, unit) {
    function createCartRow(title, value, cost, unit) {
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

        // text.textContent = (type == "") ? title : type + ' «' + title + '»';
        text.textContent = title;
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

    // Показ окна информации о заказе
    function showResponse() {
        $('.response').fadeIn();
    }

    // Нажатие кнопку закзазть
    $('.form__submit').on('click', function(e) {
        e.preventDefault();
        $('.confirm').fadeOut();
        setTimeout(showResponse, 500);
        let cart = collectCart();
        sendOrder(cart);
    });


    // Скрытие всплывающих окон
    function hidePopPup() {
        $('.popup__wrapper').fadeOut();
        $('body').removeClass('fixed');
        $('.into').hide();
        $('.nav__list').removeClass('show');
    }

    function sendOrder(cart) {
        let form = document.querySelector('.form'),
            formData = new FormData(form),
            data = {},
            customer = {},
            payment = {},
            pickup = {},
            price = {},
            callCenter = {},
            now = Date.now();

        data['originalOrderId'] = now + '';
        data['preOrder'] = true;
        data['createdAt'] = new Date(now + 6 * 60 * 60 * 1000).toISOString();

        customer['name'] = formData.get('name');
        customer['phone'] = formData.get('phone');
        data['customer'] = customer;

        payment['type'] = 'cash';
        data['payment'] = payment;

        data['expeditionType'] = 'pickup';

        pickup['expectedTime'] = data['createdAt'];
        pickup['taker'] = 'customer';
        data['pickup'] = pickup;

        data['products'] = cart;

        price['total'] = parseInt(document.querySelector('.cart__total-digit').textContent);
        price['deliveryFee'] = 0;
        price['discount'] = 0;
        data['price'] = price;

        data['personsQuantity'] = 1;

        callCenter['phone'] = '12345678';
        data['callCenter'] = callCenter;


        let jsonData = JSON.stringify(data);

        let request = new XMLHttpRequest(),
            response = document.querySelector('.response');
        request.open('POST', orderLink);
        request.setRequestHeader('Authorization', auth);
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.send(jsonData);
        console.log("Заказ отправлен");
        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                console.log("Ожидание ответа");
                response.textContent = "Ждите...";
            } else if (request.readyState === 4 && request.status == 201) {
                console.log("Заказ принят");
                response.classList.remove('error');
                response.innerHTML = "Ваш заказ принят.<br>Наши операторы скоро с Вами свяжутся.";
                clearCart();
                setTimeout(hidePopPup, 3000);
            } else {
                console.log("Заказ не принят");
                response.classList.add('error');
                response.innerHTML = 'Заказ не принят.<br>Попробуйте позже...'
                setTimeout(hidePopPup, 3000);
            }
        }

    }

    function collectCart() {
        let cart = document.querySelector('.cart'),
            rows = cart.querySelectorAll('.cart__row'),
            cartProducts = [];
        rows.forEach(function(row) {
            let product = {};
            product['id'] = "{" + row.getAttribute('id').replace('code', '') + "}";
            product['name'] = row.querySelector('.row__text').textContent;
            product['price'] = row.querySelector('.row__price').textContent;
            product['quantity'] = row.querySelector('input.row__input').value;
            cartProducts.push(product);
        });
        return cartProducts;
    }

    function clearCart() {
        document.querySelector('.cart__row-box').textContent = '';
        reCalc();
    }

};