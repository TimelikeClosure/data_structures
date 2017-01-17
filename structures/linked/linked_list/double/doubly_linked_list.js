
function DoublyLinkedList() {
  var self = this;
  self.head = new Link(0, null, null);
  self.current = self.head;
  
  this.logStatus = function() {
    console.log("head: ", self.head, "current: ", self.current);
  };
  
  this.appendLink = function(appendedLink) {
    if (appendedLink === undefined) {
      this.current.next = new AppendedLink(self.current);
    }
    self.current = self.current.next;
  };
  
  this.insertLink = function(displacedLink, insertedLink) {
    if (insertedLink === undefined) {
      insertedLink = new InsertedLink(displacedLink);
    }
    if (displacedLink.previous !== null) {
      displacedLink.previous.next = insertedLink;
    } else {
      self.head = insertedLink;
    }
    displacedLink.previous = insertedLink;
  };
  
  this.removeLink = function(removedLink) {
    if (removedLink !== self.head) {
      removedLink.previous.next = removedLink.next;
    } else {
      self.head = removedLink.next;
    }
    if (removedLink !== self.current) {
      removedLink.next.previous = removedLink.previous;
      return removedLink.next;
    } else {
      self.current = removedLink.previous;
      return null;
    }
  };
  
  this.switchLink = function(link1, link2) {
    if (link1.next !== null) {
      var oldLink1Next = link1.next;
      self.removeLink(link1);
    } else {
      
    }
  };
    
  function AppendedLink(previousLink) {
    Link.call(this, previousLink.index + 1, null, previousLink);
  }
  
  function InsertedLink(displacedLink) {
    if (displacedLink.previous === null) {
      Link.call(this, displacedLink.index - 1, displacedLink, null);
    } else {
      Link.call(this, (displacedLink.index + displacedLink.previous.index)/2, displacedLink, displacedLink.previous);
    }
  }
}
