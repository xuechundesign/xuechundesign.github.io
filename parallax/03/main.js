// Get reference to Canvas
var canvas = document.getElementById('canvas');

// Get reference to Canvas Context
var context = canvas.getContext('2d');

// Get reference to loading screen
var loading_screen = document.getElementById('loading');

// Initialize loading variables
var loaded = false;
var load_counter = 0;

//Initialize images for layers
var bird = new Image();
var bgColor =new Image();
var birdShadow = new Image();
var cosmeticTable = new Image();
var cosmeticWoman = new Image();
var familyBarrier = new Image();
var familyDad = new Image();
var familyMom = new Image();
var hole = new Image();
var holeShadow = new Image();
var mask = new Image();
var motorBarrier = new Image();
var motorMom = new Image();
var pregnantDoctor = new Image();
var pregnantScreen = new Image();
var pregnantWoman = new Image();
var shadow = new Image();
var weddingBride = new Image();
var weddingShadow = new Image();
var weddingBridegroom = new Image();
var weddingMountain = new Image();
var weddingSea = new Image();
var bgHead = new Image();




// Create a list of layer objects
var layer_list = [

  {
    'image': bgColor,
    'src': './images/bgColor.png',
    'z_index': 0,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': hole,
    'src': './images/hole.png',
    'z_index': 0,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': shadow,
    'src': './images/shadow.png',
    'z_index': -1,
    'position': { x: 0, y: 0 },
    'blend': 'mutiply',
    'opacity': 0.5
  },
  {
    'image': holeShadow,
    'src': './images/holeShadow.png',
    'z_index': 0,
    'position': { x: 0, y: 0 },
    'blend': 'mutiply',
    'opacity': 1
  },
  {
    'image': pregnantDoctor,
    'src': './images/pregnantDoctor.png',
    'z_index': -0.2,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': pregnantScreen,
    'src': './images/pregnantScreen.png',
    'z_index': -0.1,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': pregnantWoman,
    'src': './images/pregnantWoman.png',
    'z_index': 1,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': weddingMountain,
    'src': './images/weddingMountain.png',
    'z_index': -3.4,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': cosmeticTable,
    'src': './images/cosmeticTable.png',
    'z_index': -1,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': bgHead,
    'src': './images/bgHead.png',
    'z_index': 0,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': familyBarrier,
    'src': './images/familyBarrier.png',
    'z_index': 0.7,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': motorMom,
    'src': './images/motorMom.png',
    'z_index': 0.7,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
    {
    'image': familyMom,
    'src': './images/familyMom.png',
    'z_index': 1.4,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': familyDad,
    'src': './images/familyDad.png',
    'z_index': 1.2,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': cosmeticWoman,
    'src': './images/cosmeticWoman.png',
    'z_index': 0.6,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': weddingSea,
    'src': './images/weddingSea.png',
    'z_index': -2.5,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': weddingShadow,
    'src': './images/weddingShadow.png',
    'z_index': -1,
    'position': { x: 0, y: 0 },
    'blend': 'mutiply',
    'opacity': 0.35
  },
  {
    'image': weddingBridegroom,
    'src': './images/weddingBridegroom.png',
    'z_index': 1.8,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': weddingBride,
    'src': './images/weddingBride.png',
    'z_index': 2.5,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': mask,
    'src': './images/mask.png',
    'z_index': 0,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': birdShadow,
    'src': './images/birdShadow.png',
    'z_index': 1.75,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },
  {
    'image': bird,
    'src': './images/bird.png',
    'z_index': 3.5,
    'position': { x: 0, y: 0 },
    'blend': null,
    'opacity': 1
  },


]

// Go through the list of layer objects and load images from source
layer_list.forEach(function (layer, index) {
  layer.image.onload = function () {
    // Add 1 to the load counter
    load_counter += 1;
    // Checks if all the images are loaded
    if (load_counter >= layer_list.length) {
      hideLoading();
      // Start the render Loop! 
      requestAnimationFrame(drawCanvas);
    }
  }
  layer.image.src = layer.src;
});

// Function to hide the loading mask
function hideLoading() {
  loading_screen.classList.add('hidden');
}

// Draw layers in Canvas
function drawCanvas() {
  // Erase everything currently on the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  TWEEN.update();
	// Calculate how much the canvas should be rotated
	var rotate_x = (pointer.y * -0.15) + (motion.y * -1.2);
  var rotate_y = (pointer.x * 0.15) + (motion.x * 1.2);
  
  var transform_string = "rotateX("+ rotate_x+ "deg)rotateY("+rotate_y+"deg)";
	// Actually rotate the canvas
	canvas.style.transform = "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg)";
  // Loop through each layer in the list and draw it to the canvas
  layer_list.forEach(function (layer, index) {

    // Calculate what the position of the layer should be (getOffset function is below)
    layer.position = getOffset(layer);

    // If the layer has a blend mode set, use that blend mode, otherwise use normal
    if (layer.blend) {
      context.globalCompositeOperation = layer.blend;
    } else {
      context.globalCompositeOperation = 'normal';
    }

    // Set the opacity of the layer
    context.globalAlpha = layer.opacity;

    // Draw the layer into the canvas context
    context.drawImage(layer.image, layer.position.x, layer.position.y);
  });

  // Loop this function! requestAnimationFrame is a special built in function that can draw to the canvas at 60 frames per second
  // NOTE: do not call drawCanvas() without using requestAnimationFrame here—things will crash!
  requestAnimationFrame(drawCanvas);
}

// Function to calculate layer offset
function getOffset(layer) {
  // Calculate the amount you want the layers to move based on touch or mouse input.
  // You can play with the touch_multiplier variable here. Depending on the size of your canvas you may want to turn it up or down.
  var touch_multiplier = 0.3;
  var touch_offset_x = pointer.x * layer.z_index * touch_multiplier;
  var touch_offset_y = pointer.y * layer.z_index * touch_multiplier;

  // Calculate the amount you want the layers to move based on the gyroscope
  // You can play with the motion_multiplier variable here. Depending on the size of your canvas you may want to turn it up or down.
  var motion_multiplier = 2.5;
  var motion_offset_x = motion.x * layer.z_index * motion_multiplier;
  var motion_offset_y = motion.y * layer.z_index * motion_multiplier;

  // Calculate the total offset for both X and Y
  // Total offset is a combination of touch and motion
  var offset = {
    x: touch_offset_x + motion_offset_x,
    y: touch_offset_y + motion_offset_y
  };

  // Return the calculated offset to whatever requested it.
  return offset;
}




//// TOUCH AND MOUSE CONTROLS ////

// Initialize variables for touch and mouse-based parallax

// This is a variable we're using to only move things when you're touching the screen, or holding the mouse button down.
var moving = false;

// Initialize touch and mouse position
var pointer_initial = {
  x: 0,
  y: 0
};
var pointer = {
  x: 0,
  y: 0
};

// This one listens for when you start touching the canvas element
canvas.addEventListener('touchstart', pointerStart);
// This one listens for when you start clicking on the canvas (when you press the mouse button down)
canvas.addEventListener('mousedown', pointerStart);

// Runs when touch or mouse click starts
function pointerStart(event) {
  // Ok, you touched the screen or clicked, now things can move until you stop doing that
  moving = true;
  // Check if this is a touch event
  if (event.type === 'touchstart') {
    // set initial touch position to the coordinates where you first touched the screen
    pointer_initial.x = event.touches[0].clientX;
    pointer_initial.y = event.touches[0].clientY;
    // Check if this is a mouse click event
  } else if (event.type === 'mousedown') {
    // set initial mouse position to the coordinates where you first clicked
    pointer_initial.x = event.clientX;
    pointer_initial.y = event.clientY;
  }
}


// This runs whenever your finger moves anywhere in the browser window
window.addEventListener('mousemove', pointerMove);
// This runs whenever your mouse moves anywhere in the browser window
window.addEventListener('touchmove', pointerMove);

// Runs when touch or mouse is moved
function pointerMove(event) {
  // This is important to prevent scrolling the page instead of moving layers around
  event.preventDefault();
  // Only run this if touch or mouse click has started
  if (moving === true) {
    var current_x = 0;
    var current_y = 0;
    // Check if this is a touch event
    if (event.type === 'touchmove') {
      // Current position of touch
      current_x = event.touches[0].clientX;
      current_y = event.touches[0].clientY;
      // Check if this is a mouse event
    } else if (event.type === 'mousemove') {
      // Current position of mouse cursor
      current_x = event.clientX;
      current_y = event.clientY;
    }
    // Set pointer position to the difference between current position and initial position
    pointer.x = current_x - pointer_initial.x;
    pointer.y = current_y - pointer_initial.y;
  }
};

// Listen to any time you move your finger in the canvas element
canvas.addEventListener('touchmove', function (event) {
  // Don't scroll the screen
  event.preventDefault();
});
// Listen to any time you move your mouse in the canvas element
canvas.addEventListener('mousemove', function (event) {
  // Don't do whatever would normally happen when you click and drag
  event.preventDefault();
});

// Listen for when you stop touching the screen
window.addEventListener('touchend', function (event) {
  // Run the endGesture function (below)
  endGesture();
});
// Listen for when you release the mouse button anywhere on the screen
window.addEventListener('mouseup', function (event) {
  // Run the endGesture function (below)
  endGesture();
});


function endGesture() {
  // You aren't touching or clicking anymore, so set this back to false
  moving = false;

  TWEEN.removeAll();
  var pointer_tween = new TWEEN.Tween(pointer).to({x: 0, y: 0}, 300).easing(TWEEN.Easing.Back.Out).start();	
}


//// MOTION CONTROLS ////


// Initialize variables for motion-based parallax
var motion_initial = {
  x: null,
  y: null
};
var motion = {
  x: 0,
  y: 0
};

var $permit = document.querySelector("#permit");

if (window.DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
  $permit.classList.add('visible');
}

function enableMotionControl(){

  // This is where we listen to the gyroscope position
  window.addEventListener('deviceorientation', function(event) {
    // hide class
    $permit.classList.remove('visible')

    // If this is the first run through here, set the initial position of the gyroscope
    if (!motion_initial.x && !motion_initial.y) {
      motion_initial.x = event.beta;
      motion_initial.y = event.gamma;
    }
    
    // Depending on what orientation the device is in, you need to adjust what each gyroscope axis means
    // This can be a bit tricky
      if (window.orientation === 0) {
        // The device is right-side up in portrait orientation
        motion.x = event.gamma - motion_initial.y;
        motion.y = event.beta - motion_initial.x;
      } else if (window.orientation === 90) {
        // The device is in landscape laying on its left side
        motion.x = event.beta - motion_initial.x;
        motion.y = -event.gamma + motion_initial.y;
      } else if (window.orientation === -90) {
        // The device is in landscape laying on its right side
        motion.x = -event.beta + motion_initial.x;
        motion.y = event.gamma - motion_initial.y;
      } else {
        // The device is upside-down in portrait orientation
      motion.x = -event.gamma + motion_initial.y;
      motion.y = -event.beta + motion_initial.x;
      }

    // This is optional, but prevents things from moving too far (because these are 2d images it can look broken)
    var max_offset = 55;
      
      // Check if magnitude of motion offset along X axis is greater than your max setting
      if (Math.abs(motion.x) > max_offset) {
        // Check whether offset is positive or negative, and make sure to keep it that way
        if (motion.x < 0) {
          motion.x = -max_offset;
        } else {
          motion.x = max_offset;
        }
      }
      // Check if magnitude of motion offset along Y axis is greater than your max setting
      if (Math.abs(motion.y) > max_offset) {
        // Check whether offset is positive or negative, and make sure to keep it that way
        if (motion.y < 0) {
          motion.y = -max_offset;
        } else {
          motion.y = max_offset;
        }
      }
  });

  // Reset the position of motion controls when device changes between portrait and landscape, etc.
  window.addEventListener('orientationchange', function(event) {
    motion_initial.x = 0;
    motion_initial.y = 0;
  });
}

enableMotionControl()

$permit.addEventListener('click', (event) => {
  window.DeviceMotionEvent.requestPermission()
  .then(response => {
    if (response == 'granted') {
      // permission granted
      enableMotionControl()
      alert("yes")
    } else {
      // permission not granted
      alert("no")
    }
  })
})
