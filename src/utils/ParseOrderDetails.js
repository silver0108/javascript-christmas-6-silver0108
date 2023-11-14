const parseOrderDetails = (orderDetails) => {
  const menus = orderDetails.trim().split(',').map(item => {
    const [name, count] = item.trim().split('-');
    return { menuName: name, menuCnt: count };
  })
  return menus;
}

export default parseOrderDetails;