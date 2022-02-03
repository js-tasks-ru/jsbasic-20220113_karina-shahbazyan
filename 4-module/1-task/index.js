function makeFriendsList(friends) {
  let ulElement = document.createElement("ul");
  friends = friends.map((friend) => friend.firstName + ' ' + friend.lastName);
  for (let key in friends) {
    let liElement = document.createElement("li");
    liElement.append(friends[key]);
    ulElement.append(liElement);
  }
  return ulElement;
}
