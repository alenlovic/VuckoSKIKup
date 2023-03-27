using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VuckoSKIKup.Database;
using VuckoSKIKup.Models;

namespace VuckoSKIKup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StazeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StazeController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Staze
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StazeModel>>> GetStaze()
        {
          if (_context.Staze == null)
          {
              return NotFound();
          }
            return await _context.Staze.ToListAsync();
        }

        // GET: api/Staze/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StazeModel>> GetStazeModel(int id)
        {
          if (_context.Staze == null)
          {
              return NotFound();
          }
            var stazeModel = await _context.Staze.FindAsync(id);

            if (stazeModel == null)
            {
                return NotFound();
            }

            return stazeModel;
        }

        // PUT: api/Staze/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStazeModel(int id, StazeModel stazeModel)
        {
            if (id != stazeModel.ID)
            {
                return BadRequest();
            }

            _context.Entry(stazeModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StazeModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Staze
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StazeModel>> PostStazeModel(StazeModel stazeModel)
        {
          if (_context.Staze == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Staze'  is null.");
          }
            _context.Staze.Add(stazeModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStazeModel", new { id = stazeModel.ID }, stazeModel);
        }

        // DELETE: api/Staze/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStazeModel(int id)
        {
            if (_context.Staze == null)
            {
                return NotFound();
            }
            var stazeModel = await _context.Staze.FindAsync(id);
            if (stazeModel == null)
            {
                return NotFound();
            }

            _context.Staze.Remove(stazeModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StazeModelExists(int id)
        {
            return (_context.Staze?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
