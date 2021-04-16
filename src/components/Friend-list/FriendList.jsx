// import friends from '../../friend-list/friends.json';

// Компонент должен принимать несколько пропов:

// avatar - ссылка на аватар
// name - имя друга
// isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
// В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

// Компонент должен создавать DOM следующей структуры.

// <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="" width="48" />
//   <p class="name"></p>
// </li>

/* <FriendList friends={friends} />, */

const FriendList = () => {
  return (
    <ul className="friend-list">
   {/* Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве */}
    <li>Yo!</li>
    </ul> 
  );
};

export default FriendList;