
const PaymentIcons=()=> {
    const paymentMethods = ["discover", "maestro", "amex", "paypal", "visa"];
  return (
    <div className="flex space-x-2">
      {
        paymentMethods.map((method)=>(
            <img key={method} src={`images/payement/${method}.svg`} className="w-[40px] h-[26px]"/>
        ))
      }
    </div>
  )
}

export default PaymentIcons
