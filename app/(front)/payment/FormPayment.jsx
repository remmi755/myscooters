import React from "react";

const FormPayment = () => {
  return (
    <>
      <h1 className="mt-48 text text-center text-3xl">FormPayment</h1>
      <form
        method="post"
        action="https://secure.wayforpay.com/pay"
        acceptCharset="utf-8"
      >
        <input name="merchantAccount" value="test_merch_n1" />
        <input name="merchantAuthType" value="SimpleSignature" />
        <input name="merchantDomainName" value="www.market.ua" />
        <input
          name="merchantSignature"
          value="b95932786cbe243a76b014846b63fe92"
        />
        <input name="orderReference" value="DH783023" />
        <input name="orderDate" value="1415379863" />
        <input name="amount" value="1547.36" />
        <input name="currency" value="UAH" />
        <input name="orderTimeout" value="49000" />
        <input
          name="productName[]"
          value="Процессор Intel Core i5-4670 3.4GHz"
        />
        <input
          name="productName[]"
          value="Память Kingston DDR3-1600 4096MB PC3-12800"
        />
        <input name="productPrice[]" value="1000" />
        <input name="productPrice[]" value="547.36" />
        <input name="productCount[]" value="1" />
        <input name="productCount[]" value="1" />
        <input name="clientFirstName" value="Вася" />
        <input name="clientLastName" value="Пупкин" />
        <input name="clientAddress" value="пр. Гагарина, 12" />
        <input name="clientCity" value="Днепропетровск" />
        <input name="clientEmail" value="some@mail.com" />
        <input name="defaultPaymentSystem" value="card" />
        <button type="submit">Оплатить</button>
      </form>
    </>
  );
};

export default FormPayment;
