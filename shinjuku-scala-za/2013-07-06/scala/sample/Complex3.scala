class Complex(real: Double, imaginary: Double) {
  def r = real
  def i = imaginary
  // r ± ai 的な感じで表示する.
  override def toString() = f"$r%f$i%+fi"
}

object ComplexNumbers {
  def main(args: Array[String]) {
    val c = new Complex(1.2, 3.4)
    println(c.toString)
  }
}
