function preload(){
  bubbleImage = loadImage("big-bubble-2.png")
  diverImage = loadImage("diver.png")
  vaultImage = loadImage("vault.png")
  oceanImage = loadImage("ocean.jpg.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bubbleX = random(0, windowWidth)
  bubbleY = 800
  bubbleSize = random(10, 150)

  bubble2X = random(0, windowWidth)
  bubble2Y = 800
  bubble2Size = random(10, 150)

  bubble3X = random(0, windowWidth)
  bubble3Y = 800
  bubble3Size = random(10, 150)

  bubble4X = random(0, windowWidth)
  bubble4Y = 800
  bubble4Size = random(10, 150)

  bubble5X = random(0, windowWidth)
  bubble5Y = 800
  bubble5Size = random(10, 150)

  bubble6X = random(0, windowWidth)
  bubble6Y = 800
  bubble6Size = random(10, 150)

  bubble7X = random(0, windowWidth)
  bubble7Y = 800
  bubble7Size = random(10, 150)

  bubble8X = random(0, windowWidth)
  bubble8Y = 800
  bubble8Size = random(10, 150)

  bubble9X = random(0, windowWidth)
  bubble9Y = 800
  bubble9Size = random(10, 150)

  bubble10X = random(0, windowWidth)
  bubble10Y = 800
  bubble10Size = random(10, 150)

  // diverX = 100
  // diverY = 100
  // targetX = 
}

function draw() {
  background(153, 192, 227);

  imageMode(CENTER)
  image(oceanImage, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  
  image(vaultImage, windowWidth/2, windowHeight/2, 300, 517)

  image(diverImage, 250, 500, 200, 109.3)

  bubbleY = bubbleY - 1
  bubbleX = bubbleX + random(-2, 2)

  bubble2Y = bubble2Y - 1
  bubble2X = bubble2X + random(-2, 2)

  bubble3Y = bubble3Y - 1
  bubble3X = bubble3X + random(-2, 2)

  bubble4Y = bubble4Y - 1
  bubble4X = bubble4X + random(-2, 2)

  bubble5Y = bubble5Y - 1
  bubble5X = bubble5X + random(-2, 2)

  bubble6Y = bubble6Y - 1
  bubble6X = bubble6X + random(-2, 2)

  bubble7Y = bubble7Y - 1
  bubble7X = bubble7X + random(-2, 2)

  bubble8Y = bubble8Y - 1
  bubble8X = bubble8X + random(-2, 2)

  bubble9Y = bubble9Y - 1
  bubble9X = bubble9X + random(-2, 2)

  bubble10Y = bubble10Y - 1
  bubble10X = bubble10X + random(-2, 2)

  image(bubbleImage, bubbleX, bubbleY, bubbleSize, bubbleSize)
  image(bubbleImage, bubble2X, bubble2Y, bubble2Size, bubble2Size)
  image(bubbleImage, bubble3X, bubble3Y, bubble3Size, bubble3Size)
  image(bubbleImage, bubble4X, bubble4Y, bubble4Size, bubble4Size)
  image(bubbleImage, bubble5X, bubble5Y, bubble5Size, bubble5Size)
  image(bubbleImage, bubble6X, bubble6Y, bubble6Size, bubble6Size)
  image(bubbleImage, bubble7X, bubble7Y, bubble7Size, bubble7Size)
  image(bubbleImage, bubble8X, bubble8Y, bubble8Size, bubble8Size)
  image(bubbleImage, bubble9X, bubble9Y, bubble9Size, bubble9Size)
  image(bubbleImage, bubble10X, bubble10Y, bubble10Size, bubble10Size)

  // fishX = lerp(fishX, targetX, 0.05)
  // fishY = lerp(fishY, targetY, 0,05)
}

function mouseClicked(){
  // targetX = mouseX
  // targetY = mouseY
}