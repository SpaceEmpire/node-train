// listSize(属性) 列表的元素个数
// pos(属性) 列表的当前位置
// length(属性) 返回列表中的元素个数
// clear(方法) 清空列表中的所有元素
// toString(方法) 返回列表的字符串形式
// getElement(方法) 返回当前位置的元素
// insert(方法) 在现有元素后插入新元素
// append(方法) 在列表的末尾添加新元素
// remove(方法) 从列表中删除元素
// front(方法) 将列表的当前位置设移动到第一个元素
// end(方法) 将列表的当前位置移动到最后一个元素
// prev(方法) 将当前位置后移一位
// next(方法) 将当前位置前移一位
// hasNext(方法) 判断后一位
// hasPrev(方法) 判断前一位
// currPos(方法) 返回列表的当前位置
// moveTo(方法) 将当前位置移动到指定位置

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
}