function randomColor() {
    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#1677ff', '#87d068', '#f56a30', '#21a2ae', '#ffbf63', '#7115e6'];
    const color = Math.floor(Math.random() * 10) + 1;
    
    return colorList[color];
}

export {
    randomColor,
}