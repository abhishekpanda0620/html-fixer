/**
 * Utility functions for console output
 */

// ANSI color codes for terminal output (no external deps needed)
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

export interface LoggerOptions {
  verbose: boolean;
  quiet: boolean;
}

export class Logger {
  private options: LoggerOptions;

  constructor(options: Partial<LoggerOptions> = {}) {
    this.options = {
      verbose: options.verbose ?? false,
      quiet: options.quiet ?? false,
    };
  }

  /**
   * Log info message (unless quiet mode)
   */
  info(message: string): void {
    if (!this.options.quiet) {
      console.log(message);
    }
  }

  /**
   * Log success message with green color
   */
  success(message: string): void {
    if (!this.options.quiet) {
      console.log(`${colors.green}✓${colors.reset} ${message}`);
    }
  }

  /**
   * Log warning message with yellow color
   */
  warn(message: string): void {
    if (!this.options.quiet) {
      console.log(`${colors.yellow}⚠${colors.reset} ${message}`);
    }
  }

  /**
   * Log error message with red color (always shown)
   */
  error(message: string): void {
    console.error(`${colors.red}✖${colors.reset} ${message}`);
  }

  /**
   * Log verbose/debug message (only in verbose mode)
   */
  debug(message: string): void {
    if (this.options.verbose && !this.options.quiet) {
      console.log(`${colors.dim}${message}${colors.reset}`);
    }
  }

  /**
   * Format a file path for display
   */
  formatPath(path: string): string {
    return `${colors.cyan}${path}${colors.reset}`;
  }

  /**
   * Format a number with bold
   */
  formatNumber(num: number): string {
    return `${colors.bold}${num}${colors.reset}`;
  }

  /**
   * Log a summary box
   */
  summary(lines: string[]): void {
    if (this.options.quiet) return;

    console.log('');
    console.log(`${colors.bold}Summary:${colors.reset}`);
    lines.forEach((line) => console.log(`  ${line}`));
    console.log('');
  }
}

export const defaultLogger = new Logger();
