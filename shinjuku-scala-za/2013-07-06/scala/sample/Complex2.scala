class Complex(real: Double, imaginary: Double) {
  def r = real
  def i = imaginary
}

object ComplexNumbers {
  def main(args: Array[String]) {
    val c = new Complex(1.2, 3.4)
    println("real part     : " + c.r)
    println("imaginary part: " + c.i)
  }
}
