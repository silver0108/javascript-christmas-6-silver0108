const parseOrderDetails = (orderDetails) => {
  const menus = orderDetails.trim().split(',').map(item => {
    const [name, quantity] = item.trim().split('-');
    return { menuName: name, quantity: quantity };
  })
  return menus;
}

export default parseOrderDetails;