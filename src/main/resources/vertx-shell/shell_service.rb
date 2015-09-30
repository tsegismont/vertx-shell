require 'vertx/vertx'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.shell.ShellService
module VertxShell
  #  @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
  class ShellService
    # @private
    # @param j_del [::VertxShell::ShellService] the java delegate
    def initialize(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxShell::ShellService] the underlying java delegate
    def j_del
      @j_del
    end
    # @param [::Vertx::Vertx] vertx 
    # @param [Hash] options 
    # @return [::VertxShell::ShellService]
    def self.create(vertx=nil,options=nil)
      if vertx.class.method_defined?(:j_del) && options.class == Hash && !block_given?
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtShell::ShellService.java_method(:create, [Java::IoVertxCore::Vertx.java_class,Java::IoVertxExtShell::ShellServiceOptions.java_class]).call(vertx.j_del,Java::IoVertxExtShell::ShellServiceOptions.new(::Vertx::Util::Utils.to_json_object(options))),::VertxShell::ShellService)
      end
      raise ArgumentError, "Invalid arguments when calling create(vertx,options)"
    end
    # @yield 
    # @return [void]
    def start
      if !block_given?
        return @j_del.java_method(:start, []).call()
      elsif block_given?
        return @j_del.java_method(:start, [Java::IoVertxCore::Handler.java_class]).call((Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling start()"
    end
    # @yield 
    # @return [void]
    def close
      if block_given?
        return @j_del.java_method(:close, [Java::IoVertxCore::Handler.java_class]).call((Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling close()"
    end
  end
end