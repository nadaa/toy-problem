/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
	var arrSet=new Set(this);    // to omit replicates
	newArr = Array.from(arrSet); // transform set back to an array

	newArr.sort(function(a,b){return a-b});
	arr.sort(function(a,b){return a-b});

	for(let i=0;i<newArr.length;i++){
		if(newArr[i]!==arr[i]){
			return false;
		}
	}
	return true
}
