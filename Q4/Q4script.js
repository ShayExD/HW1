class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    Show() {
      return { x: this.x, y: this.y };
    }
  
    Equals(p) {
      return this.x === p.x && this.y === p.y;
    }

  }


  function contains(x, y, points) {
    for (let i = 0; i < points.length; i++) {
      if (points[i].Equals(new Point(x, y))) {
        return true;
      }
    }
    return false;
  }

// Sample 1: Return true
const pointsArray1 = [new Point(1.5, 2.5), new Point(3.0, 4.0)];
console.log(contains(3.0, 4.0, pointsArray1)); // Output: true

// Sample 2: Return false
const pointsArray2 = [new Point(1.5, 2.5), new Point(3.0, 4.0)];
console.log(contains(5.0, 6.0, pointsArray2)); // Output: false




  function doesPointExist(pointsArray, targetPoint) {
    for (let i = 0; i < pointsArray.length; i++) {
      if (pointsArray[i].Equals(targetPoint)) {
        return true;
      }
    }
    return false;
  }


  const point1 = new Point(1.5, 2.5);
  const point2 = new Point(3.0, 4.0);
  const point3 = new Point(1.5, 2.5);
  
  const pointsArray3 = [point1, point2];
  
  // Sample 1: Return true
  console.log(doesPointExist(pointsArray3, point3)); // Output: true
  
  const pointsArray4 = [new Point(2.0, 3.0), new Point(4.0, 5.0)];
  
  // Sample 2: Return false
  console.log(doesPointExist(pointsArray4, new Point(1.5, 2.5))); // Output: false 



  function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }


  function calculateRoadDistance(pointsArray) {
    if (pointsArray.length < 4) {
      throw new Error('The array must contain at least 4 points.');
    }
  
    let totalDistance = 0;
  
    for (let i = 0; i < pointsArray.length - 1; i++) {
      const distance = calculateDistance(pointsArray[i], pointsArray[i + 1]);
      totalDistance += distance;
    }
  
    return totalDistance;
  }




    const point_1 = new Point(1, 2);
    const point_2 = new Point(3, 4);
    const point_3 = new Point(5, 6);
    const point_4 = new Point(7, 8);

    const pointsArrayLast = [point_1, point_2, point_3, point_4];

    const pointsContainer = document.getElementById('points-container');
    pointsArrayLast.forEach((point, index) => {
      const pointElement = document.createElement('p');
      pointElement.textContent = `Point ${index + 1}: (${point.x}, ${point.y})`;
      pointsContainer.appendChild(pointElement);
    });


    try {
      const totalDistance = calculateRoadDistance(pointsArrayLast);
      const totalDistanceElement = document.getElementById('total-distance');
      totalDistanceElement.textContent = totalDistance.toFixed(2);
    } catch (error) {
      console.error(error.message);
    }