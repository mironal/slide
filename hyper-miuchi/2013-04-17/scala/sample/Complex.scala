class Complex(real: Double, imaginary: Double) {
  def r = real
  def i = imaginary
  override def toString() = f"$r%f$i%+fi"
}

object Complex {
  def apply(i: Double, r: Double) = {
      new Complex(i, r)
  }
}
