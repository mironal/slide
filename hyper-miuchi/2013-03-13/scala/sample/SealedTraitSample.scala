sealed trait Error { def msg: String }
case class FooError(msg: String) extends Error
case class BarError(msg: String) extends Error

object SealedTraitSample extends App {
  val error: Error = FooError("foo")
  printError(error)

  def printError(e: Error) = {
    error match {
      case FooError(msg) => println(msg)
      //case BarError(msg) => println(msg)
    }
  }
}
